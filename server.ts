import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  // Use 3000 for AI Studio, but allow environment override for Hostinger if needed
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  // Detailed logging for API requests
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      console.log(`[API] ${req.method} ${req.path} - ${new Date().toISOString()}`);
    }
    next();
  });

  // Test route to verify API is working
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "API is alive", timestamp: new Date().toISOString() });
  });

  // Subscription endpoint directly in server.ts for better reliability on Hostinger
  // Supporting both with and without trailing slash
  const handleSubscribe = async (req: express.Request, res: express.Response) => {
    console.log("Received subscription request:", req.body);
    
    const { email: rawEmail, name, businessName, website, phone, industry, location } = req.body;
    const email = rawEmail?.trim().toLowerCase();

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Support both naming conventions just in case
    const apiKey = (process.env.SYSTEME_IO_API_KEY || process.env.SYSTEME_API_KEY)?.trim();
    const tagId = (process.env.SYSTEME_IO_TAG_ID || process.env.SYSTEME_TAG_ID)?.trim();

    if (!apiKey) {
      console.error("CRITICAL: Systeme.io API Key is missing from environment variables.");
      return res.status(500).json({ error: "Server configuration error: API Key missing" });
    }

    console.log("Using API Key (last 4):", apiKey.slice(-4));

    try {
      const commonHeaders = {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };

      // Helper to format fields
      const formatFields = (data: any, includeCustom: boolean = true) => {
        const fields = [];
        if (data.name) fields.push({ slug: "first_name", value: data.name });
        if (data.phone) fields.push({ slug: "phone_number", value: data.phone });
        
        if (includeCustom) {
          if (data.businessName) fields.push({ slug: "company", value: data.businessName });
          if (data.website) fields.push({ slug: "website", value: data.website });
          if (data.industry) fields.push({ slug: "industry", value: data.industry });
          if (data.location) fields.push({ slug: "location", value: data.location });
        }
        return fields;
      };

      let contactResponse;
      try {
        console.log("Attempting to create contact in Systeme.io...");
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
        console.warn("First try failed:", JSON.stringify(errorData || firstTryError.message));

        if (firstTryError.response?.status === 422 || JSON.stringify(errorData).includes("already exists")) {
          if (JSON.stringify(errorData).includes("already exists")) {
            console.log("Contact already exists, searching for ID...");
            const searchResponse = await axios.get(`https://api.systeme.io/api/contacts?email=${encodeURIComponent(email)}`, {
              headers: commonHeaders
            });
            if (searchResponse.data.items && searchResponse.data.items.length > 0) {
              contactResponse = { data: searchResponse.data.items[0] };
            } else {
              throw firstTryError;
            }
          } else {
            console.log("Retrying with minimal fields...");
            contactResponse = await axios.post(
              "https://api.systeme.io/api/contacts",
              { email: email },
              { headers: commonHeaders }
            );
          }
        } else {
          throw firstTryError;
        }
      }

      const contactId = contactResponse.data.id;
      console.log("Contact processed successfully. ID:", contactId);

      // Add Tag
      if (tagId && contactId) {
        try {
          let finalTagId: number | null = null;
          if (!isNaN(Number(tagId))) {
            finalTagId = Number(tagId);
          } else {
            console.log("Searching for tag ID by name:", tagId);
            const tagsResponse = await axios.get("https://api.systeme.io/api/tags", {
              headers: { "x-api-key": apiKey },
            });
            const foundTag = tagsResponse.data.items.find(
              (t: any) => t.name.toLowerCase() === tagId.toLowerCase()
            );
            if (foundTag) finalTagId = foundTag.id;
          }

          if (finalTagId) {
            console.log("Adding tag ID:", finalTagId);
            await axios.post(
              `https://api.systeme.io/api/contacts/${contactId}/tags`,
              { tagId: finalTagId },
              { headers: commonHeaders }
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
      return res.status(status).json({ error: errorData?.detail || errorData?.message || "Failed to connect to Systeme.io" });
    }
  };

  app.post("/api/subscribe", handleSubscribe);
  app.post("/api/subscribe/", handleSubscribe);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from the dist directory
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    
    // SPA fallback: serve index.html for any unknown routes
    app.get("*", (req, res) => {
      // Don't fallback for API routes
      if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: "API route not found" });
      }
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
