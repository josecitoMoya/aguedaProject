import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const { CORS } = process.env;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: CORS,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(cookieParser());

//app.use("/api", router)

export default app;