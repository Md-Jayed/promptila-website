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
    const { email, firstName } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const apiKey = process.env.SYSTEME_IO_API_KEY;

    if (!apiKey) {
      console.error("SYSTEME_IO_API_KEY is not set in environment variables.");
      return res.status(500).json({ error: "Server configuration error" });
    }

    try {
      // Systeme.io API endpoint for creating a contact
      // Documentation: https://developers.systeme.io/#create-a-contact
      const response = await axios.post(
        "https://api.systeme.io/api/contacts",
        {
          email: email,
          fields: [
            {
              slug: "first_name",
              value: firstName || "",
            },
          ],
        },
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(200).json({ message: "Successfully subscribed!", data: response.data });
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
