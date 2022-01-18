import express from "express";
import router from "./route";
import dotenv from "dotenv";
import middleware from "./utils/middleware";
dotenv.config();

const app = express();
app.use(middleware);
app.use(router);
const PORT = process.env.PORT || 3500
app.listen(PORT, () => console.log(`listening on port 3500!`));