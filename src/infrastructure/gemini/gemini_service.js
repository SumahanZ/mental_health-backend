import { GoogleGenerativeAI } from "@google/generative-ai";
import MeditationRepostiory from "../../applications/repositories/meditation_repository.js";

const genAi = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

class GeminiApi extends MeditationRepostiory {
  async getDailyQuotes() {
    const prompt = `Please provide three inspirational quotes for meditation, one for each part of the day: morning, noon, and evening. Return the response in JSON format with the following format 
    {
      "morningQuote": "Your morning quote here",
      "noonQuote": "Your noon quote here",
      "eveningQuote": "Your evening quote here"
    } return the json only without using keyword json`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  }

  async getAdviceByMood(mood) {
    const prompt = `Given the current mood of the user, provide an appropriate meditation advice or mental health exercise. The possible response in json format for example 
    {
      "advice": "specific advice or exercise based on the user's mood"
    }

    For example, if the user's mood is "happy" the response should be:

    {
      "advice": "Engage in a gratitude practice by listing three things you are thankful for today. This will help sustain your positive attitude throughout the day.
    },
    So the mood is : ${mood}
    return the json only without using keyword json
    `;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  }
}

export default GeminiApi;
