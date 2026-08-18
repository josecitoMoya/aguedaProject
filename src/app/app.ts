import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "../routes/index";
import {sequelize} from "../database/index";

const { CORS } = process.env;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: CORS,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  }),
);
app.use(cookieParser());

// app.get("/", (req: express.Request, res: express.Response) => {
//   res.send({ message: "Estoy en la app!" });
// });

app.use("/api", router);

export default app;
