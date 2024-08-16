import UseCaseInterface from "../interfaces/usecase_interface.js";
import Song from "../../domain/entities/song.js";

class GetSongs extends UseCaseInterface {
  constructor(songRepository) {
    super();
    this.songRepository = songRepository;
  }

  async execute() {
    const songs = await this.songRepository.getAllSongs();
    return songs.map((song) => new Song(song.id, song.title, song.author, song.songLink));
  }
}

export default GetSongs;
