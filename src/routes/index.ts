import express from "express";
import userRoutes from "./user.routes";
import providersRoutes from "./providers.routes";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send({message: "Estoy en routes!"});
});

router.use("/users", userRoutes);
router.use("/providers", providersRoutes);

export default router;