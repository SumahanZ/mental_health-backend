//When we create pool first time, it doesn't connect to the database right away. To go around this we can do a simple query on the pool

import createApp from "./src/app.js";
import pool from "./src/infrastructure/db/pool.js";
import dotenv from "dotenv";

dotenv.config();

const app = createApp();

pool
  .connect({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  })
  .then((_) => {
    console.log("Connected to Postgres Database");
    app.listen(3005, () => console.log("Listening on PORT 3005"));
  })
  .catch((err) => console.log(err));
