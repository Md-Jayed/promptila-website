import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email: rawEmail, name, businessName, website, phone, industry, location } = req.body;
  const email = rawEmail?.trim().toLowerCase();

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const apiKey = process.env.SYSTEME_IO_API_KEY?.trim();
  const tagId = process.env.SYSTEME_IO_TAG_ID?.trim();

  if (!apiKey) {
    console.error("SYSTEME_IO_API_KEY is not set.");
    return res.status(500).json({ error: "Server configuration error" });
  }

  // Helper to filter out empty fields and format them correctly
  const formatFields = (data: any, includeCustom: boolean = true) => {
    const fields = [];
    // Standard Systeme.io slugs
    if (data.name) fields.push({ slug: "first_name", value: data.name });
    if (data.phone) fields.push({ slug: "phone_number", value: data.phone });
    
    // These are NOT standard in all Systeme.io accounts and must be created as custom fields
    if (includeCustom) {
      if (data.businessName) fields.push({ slug: "company", value: data.businessName });
      if (data.website) fields.push({ slug: "website", value: data.website });
      if (data.industry) fields.push({ slug: "industry", value: data.industry });
      if (data.location) fields.push({ slug: "location", value: data.location });
    }
    return fields;
  };

  try {
    let contactResponse;
    const commonHeaders = {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    try {
      // Attempt 1: Try with all fields
      contactResponse = await axios.post(
        "https://api.systeme.io/api/contacts",
        {
          email: email,
          fields: formatFields({ name, businessName, phone, website, industry, location }, true),
        },
        { headers: commonHeaders }
      );
    } catch (firstTryError: any) {
      const errorData = firstTryError.response?.data;
      console.warn("First try failed (likely due to custom fields like 'company'):", JSON.stringify(errorData || firstTryError.message));

      // If it's a validation error about missing slugs or contact already exists
      if (firstTryError.response?.status === 422 || (errorData && JSON.stringify(errorData).includes("already exists"))) {
        
        // If it's "already exists", try to find it
        if (JSON.stringify(errorData).includes("already exists")) {
          console.log("Contact already exists, attempting to find it...");
          const searchResponse = await axios.get(`https://api.systeme.io/api/contacts?email=${encodeURIComponent(email)}`, {
            headers: commonHeaders
          });
          if (searchResponse.data.items && searchResponse.data.items.length > 0) {
            contactResponse = { data: searchResponse.data.items[0] };
          } else {
            throw firstTryError;
          }
        } else {
          // If it's a slug error, retry with ONLY standard fields
          console.warn("Retrying with ONLY standard fields (first_name, phone_number)...");
          contactResponse = await axios.post(
            "https://api.systeme.io/api/contacts",
            {
              email: email,
              fields: formatFields({ name, phone }, false),
            },
            { headers: commonHeaders }
          );
        }
      } else {
        // For other errors, try the absolute minimum
        console.warn("Retrying with absolute minimum (email only)...");
        contactResponse = await axios.post(
          "https://api.systeme.io/api/contacts",
          { email: email },
          { headers: commonHeaders }
        );
      }
    }

    if (!contactResponse || !contactResponse.data) {
      throw new Error("Failed to create or find contact");
    }

    const contactId = contactResponse.data.id;

    // Add Tag (Smart Resolution)
    if (tagId && contactId) {
      try {
        let finalTagId: number | null = null;
        if (!isNaN(Number(tagId))) {
          finalTagId = Number(tagId);
        } else {
          const tagsResponse = await axios.get("https://api.systeme.io/api/tags", {
            headers: { "x-api-key": apiKey },
          });
          const foundTag = tagsResponse.data.items.find(
            (t: any) => t.name.toLowerCase() === tagId.toLowerCase()
          );
          if (foundTag) finalTagId = foundTag.id;
        }

        if (finalTagId) {
          await axios.post(
            `https://api.systeme.io/api/contacts/${contactId}/tags`,
            { tagId: finalTagId },
            {
              headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
              },
            }
          );
        }
      } catch (tagError: any) {
        console.error("Error adding tag:", tagError.response?.data || tagError.message);
      }
    }

    return res.status(200).json({ message: "Successfully subscribed!", data: contactResponse.data });
  } catch (error: any) {
    const errorData = error.response?.data;
    console.error("Systeme.io API Error:", JSON.stringify(errorData || error.message));
    const status = error.response?.status || 500;
    
    // Extract specific validation messages if available
    let errorMessage = "Failed to connect to Systeme.io";
    if (errorData && errorData.detail) {
      errorMessage = errorData.detail;
    } else if (errorData && errorData.message) {
      errorMessage = errorData.message;
    }
    
    return res.status(status).json({ error: errorMessage });
  }
}
