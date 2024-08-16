import UseCaseInterface from "../interfaces/usecase_interface.js";
import Meditation from "../../domain/entities/meditation.js";

class GetAdviceByMood extends UseCaseInterface {
  constructor(meditationRepository) {
    super();
    this.meditationRepository = meditationRepository;
  }

  async execute(mood) {
    const quotesData = await this.meditationRepository.getAdviceByMood(mood);
    return new Meditation(quotesData);
  }
}

export default GetAdviceByMood;
