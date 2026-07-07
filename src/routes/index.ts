import express from "express";
import userRoutes from "./user.routes";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send({message: "Estoy en routes!"});
});

router.use("/user", userRoutes);

export default router;