import pool from "../../infrastructure/db/pool.js";
import toCamelCase from "../../utils/toCamelCase.js";

class SongRepository {
  async getAllSongs() {
    const result = await pool.query("SELECT * FROM songs");
    return toCamelCase(result.rows);
  }
}

export default SongRepository;
