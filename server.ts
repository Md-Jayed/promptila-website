import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Systeme.io API Integration
  app.post("/api/subscribe", async (req, res) => {
    const { email, name, businessName, website, phone, industry, location } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const apiKey = process.env.SYSTEME_IO_API_KEY;
    const tagId = process.env.SYSTEME_IO_TAG_ID;

    if (!apiKey) {
      console.error("SYSTEME_IO_API_KEY is not set.");
      return res.status(500).json({ error: "Server configuration error" });
    }

    try {
      // 1. Create or Update Contact
      // We'll try with all fields first. If it fails (likely due to missing custom slugs),
      // we'll retry with just the standard fields.
      let contactData = {
        email: email,
        fields: [
          { slug: "first_name", value: name || "" },
          { slug: "company", value: businessName || "" },
          { slug: "phone_number", value: phone || "" },
          // Custom fields - these often cause "An error occurred" if not pre-created in Systeme.io
          { slug: "website", value: website || "" },
          { slug: "industry", value: industry || "" },
          { slug: "location", value: location || "" },
        ],
      };

      let contactResponse;
      try {
        // Attempt 1: All fields
        contactResponse = await axios.post(
          "https://api.systeme.io/api/contacts",
          contactData,
          {
            headers: {
              "x-api-key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (firstTryError: any) {
        console.warn("First try failed (likely custom fields). Retrying with basic fields...");
        try {
          // Attempt 2: Only Email and Name (Standard)
          contactResponse = await axios.post(
            "https://api.systeme.io/api/contacts",
            {
              email: email,
              fields: [{ slug: "first_name", value: name || "" }],
            },
            {
              headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
              },
            }
          );
        } catch (secondTryError: any) {
          console.warn("Second try failed. Retrying with ONLY email...");
          // Attempt 3: Absolute minimum (Only Email)
          contactResponse = await axios.post(
            "https://api.systeme.io/api/contacts",
            { email: email },
            {
              headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
              },
            }
          );
        }
      }

      const contactId = contactResponse.data.id;

      // 2. Add Tag (Smart Resolution)
      if (tagId && contactId) {
        try {
          let finalTagId: number | null = null;

          // Check if tagId is already a number
          if (!isNaN(Number(tagId))) {
            finalTagId = Number(tagId);
          } else {
            // It's a name, let's find the ID
            const tagsResponse = await axios.get("https://api.systeme.io/api/tags", {
              headers: { "x-api-key": apiKey },
            });
            
            const foundTag = tagsResponse.data.items.find(
              (t: any) => t.name.toLowerCase() === tagId.toLowerCase()
            );
            
            if (foundTag) {
              finalTagId = foundTag.id;
            } else {
              console.warn(`Tag "${tagId}" not found in Systeme.io. Skipping tagging.`);
            }
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
            console.log(`Tag ${finalTagId} added to contact ${contactId}`);
          }
        } catch (tagError: any) {
          console.error("Error adding tag:", tagError.response?.data || tagError.message);
        }
      }

      return res.status(200).json({ message: "Successfully subscribed!", data: contactResponse.data });
    } catch (error: any) {
      console.error("Systeme.io API Error:", error.response?.data || error.message);
      
      // Handle case where contact already exists or other API errors
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || "Failed to connect to Systeme.io";
      
      return res.status(status).json({ error: message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
