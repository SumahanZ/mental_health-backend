import GetAdviceByMood from "../../applications/use-cases/get_advice_by_mood.js";
import GetDailyQuotes from "../../applications/use-cases/get_daily_quotes.js";
import GeminiApi from "../../infrastructure/gemini/gemini_service.js";

class MeditationController {
  static async dailyQuote(req, res) {
    try {
      const quoteRepository = new GeminiApi();
      const getDailyQuotes = new GetDailyQuotes(quoteRepository);
      const quotes = await getDailyQuotes.execute();
      return res.json(quotes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async adviceByMood(req, res) {
    try {
      const { mood } = req.params;
      const quoteRepository = new GeminiApi();
      const getAdviceByMood = new GetAdviceByMood(quoteRepository);
      const advice = await getAdviceByMood.execute(mood);
      return res.json(advice);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default MeditationController;
