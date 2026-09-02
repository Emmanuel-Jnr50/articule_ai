import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/articulate", async (req, res) => {
  const { message, situation, tone, level } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `
You are Articule, an AI communication assistant.

Your job is to help users express what they mean more clearly,
naturally, and appropriately for their situation.

Preserve the user's original meaning and intention.
Do not invent information.
Do not make the response unnecessarily complicated.

The user has provided:

What they want to say:
${message}

Situation:
${situation}

Desired tone:
${tone}

Desired articulation level:
${level}

Rewrite their message into the best way to express what they mean.

Return ONLY the rewritten message.
Do not explain your changes.
Do not add quotation marks.
      `,
    });

    res.json({
      result: response.text,
    });

  } catch (error) {
    console.error("AI ERROR:", error);

    res.status(500).json({
      error: "Something went wrong while articulating your message.",
    });
  }
});

app.listen(5000, () => {
  console.log("Articule backend running on http://localhost:5000");
});