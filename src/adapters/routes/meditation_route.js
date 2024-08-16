import { Router } from "express";
import MeditationController from "../controllers/meditation_controller.js";

const router = Router();

router.get("/meditation/dailyQuote", MeditationController.dailyQuote);
router.get("/meditation/adviceByMood/:mood", MeditationController.adviceByMood);
router.use("/api", router);

export default router;
