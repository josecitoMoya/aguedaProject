import express from 'express';
import { ExpensesControllers } from '../controllers/expenses.controllers';

const router = express.Router();

router.get("/", ExpensesControllers.getAllExpenses);

router.post("/expenses-add", ExpensesControllers.createExpense);

router.get("/expenses-get/:id", ExpensesControllers.getExpense);

router.put("/expenses-update/:id", ExpensesControllers.updateExpense);

router.delete("/expenses-delete/:id", ExpensesControllers.deleteExpense);

export default router;

