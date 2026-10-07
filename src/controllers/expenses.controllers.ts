import { Request, Response } from 'express';
import { ExpensesServices } from '../services/expenses.services';
import { CreateExpensesInput } from '../interfaces/expense.interface';

async function createExpense(req: Request, res: Response) {
  try {
    const expenseData = req.body as CreateExpensesInput;

    const result = await ExpensesServices.createExpense(expenseData);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(201).json({
      status: result.success,
      message: `Expense ${result.data?.description} created`,
      data: result.data
    });

  } catch (error) {
    console.error('Error creating expense:', error);
    return res.status(500).json({ message: 'Error creating expense', error });
  }
}

async function getAllExpenses(req: Request, res: Response) {
  try {
    const result = await ExpensesServices.getAllExpenses();

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los gastos', error });
  }
}

async function getExpense(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await ExpensesServices.getExpense({ id });

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el gasto', error });
  }
}

async function updateExpense(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await ExpensesServices.updateExpense(id, req.body);

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el gasto', error });
  }
}

async function deleteExpense(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await ExpensesServices.deleteExpense(id);

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json({ deleted: true });

  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el gasto', error });
  }
}

export const ExpensesControllers = {
  createExpense,
  getAllExpenses,
  getExpense,
  updateExpense,
  deleteExpense
};
