import { Router } from "express";
import SongController from "../controllers/song_controller.js";

const router = Router();

router.get("/songs/get-songs", SongController.getSongs);
router.use("/api", router);

export default router;
