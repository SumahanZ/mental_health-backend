import express from "express";
import meditationRoute from "../src/adapters/routes/meditation_route.js";
import songRoute from "../src/adapters/routes/song_route.js";

export default function createApp() {
  const app = express();
  app.use(express.json());
  app.use(meditationRoute);
  app.use(songRoute);
  return app;
}
