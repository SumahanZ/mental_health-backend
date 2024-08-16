import UseCaseInterface from "../interfaces/usecase_interface.js";
import Meditation from "../../domain/entities/meditation.js";

class GetDailyQuotes extends UseCaseInterface {
  constructor(meditationRepository) {
    super();
    this.meditationRepository = meditationRepository;
  }

  async execute() {
    const quotesData = await this.meditationRepository.getDailyQuotes();
    return new Meditation(quotesData);
  }
}

export default GetDailyQuotes;
