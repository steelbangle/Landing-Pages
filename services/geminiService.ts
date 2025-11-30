import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlessing = async (name: string, amount: number): Promise<string> => {
  try {
    const prompt = `
      You are a wise and gentle sage from an Indian cow shelter (Gaushala).
      A kind soul named "${name}" has just donated ₹${amount} to help feed and treat stray cows.
      Write a short, heartwarming, and spiritual "Thank You" message/blessing for them.
      
      - Use warm, emotional language.
      - Include culturally relevant terms like "Seva", "Punya", "Gau Mata", or "Blessings" but keep it accessible to English speakers.
      - Keep it under 50 words.
      - Make them feel like they have truly made a difference today.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "May your kindness bring you eternal peace and prosperity. Thank you for your Seva.";
  } catch (error) {
    console.error("Error generating blessing:", error);
    return "Thank you for your generous donation. Your support means the world to our cows.";
  }
};
