import GetSongs from "../../applications/use-cases/get_songs.js";
import SongRepository from "../../applications/repositories/song_repository.js";

class SongController {
  static async getSongs(req, res) {
    try {
      const songRepository = new SongRepository();
      const getSongs = new GetSongs(songRepository);
      const songs = await getSongs.execute();
      return res.json(songs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default SongController;
