import express from "express";
import userRoutes from "./user.routes";
import expensesRoutes from "./expenses.routes";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send({message: "Estoy en routes!"});
});

router.use("/users", userRoutes);
router.use("/expenses", expensesRoutes);

export default router;