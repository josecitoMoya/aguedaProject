import express from "express";
import userRoutes from "./user.routes";
import providersRoutes from "./providers.routes";
import categoriesRoutes from "./categories.routes"
import invoicesRoutes from './invoices.routes'
import expensesRoutes from './expenses.routes'

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send({message: "Estoy en routes!"});
});

router.use("/users", userRoutes);
router.use("/providers", providersRoutes);
router.use("/categories", categoriesRoutes)
router.use("/invoices", invoicesRoutes)
router.use("/expenses", expensesRoutes)

export default router;