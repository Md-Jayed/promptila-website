import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import cors from "cors";
import subscribeHandler from "./api/subscribe.ts";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Use the same handler for local development
  app.post("/api/subscribe", async (req, res) => {
    // Adapt Express req/res to Vercel-like handler if needed, 
    // but since we used standard-ish logic, we can just call it.
    // Vercel handlers expect (req, res), Express provides them.
    return subscribeHandler(req as any, res as any);
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
