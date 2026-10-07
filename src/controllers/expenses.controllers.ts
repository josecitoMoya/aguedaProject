import {Request, Response} from 'express';
//import { ExpensesServices } from '../services/expenses.services';
import { CreateExpensesInput } from '../interfaces/expense.interface';

async function createExpense(req: Request, res: Response): Promise<void> {
    try {
        const expenseData = req.body as CreateExpensesInput;

        const newExpense = await ExpensesServices.createExpense(expenseData);

        if(!newExpense.success) {
            res.status(400).json(newExpense.errors);
            return;
        }

        res.status(201).json({
            status: newExpense.success,
            message: `Expense ${newExpense.data?.description} created`,
            data: newExpense.data
        })
    }
    catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({message: 'Error creating expense', error});
    }
}

async function getAllExpenses(req: Request, res: Response): Promise<void> {
    try {
        const expenses = await ExpensesServices.getAllExpenses();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los gastos', error });
    }
}

async function getExpense(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params

        const expenseId = parseInt(id as string, 10);

        if (isNaN(expenseId)) {
            res.status(400).json({ message: 'ID no válido' });
            return;
        }

        const expense = await ExpensesServices.getExpense({ id: expenseId });

        if (!expense) {
            res.status(404).json({ message: 'Expense not found' });
            return;
        }

        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el gasto', error });
    }
}

async function updateExpense(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params

        const { name } = req.body;

        const expenseId = parseInt(id as string, 10)

        if (isNaN(expenseId)) {
            res.status(400).json({ message: 'ID no válido' });
            return;
        }

        const updatedExpense = await ExpensesServices.updateExpense(expenseId, { name });

        if (!updatedExpense) {
            res.status(404).json({ message: 'Expense not found' });
            return;
        }

        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el gasto', error });
    }
}

async function deleteExpense(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;

        const expenseId = parseInt(id as string, 10);

        if (isNaN(expenseId)) {
            res.status(400).json({ message: 'ID no válido' });
            return;
        }

        const deletedExpense = await ExpensesServices.deleteExpense(expenseId);

        if (!deletedExpense) {
            res.status(404).json({ message: 'Expense not found' });
            return;
        }

        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el gasto', error });
    }
}

export const ExpensesControllers = { 
    createExpense, 
    getAllExpenses, 
    getExpense, 
    updateExpense, 
    deleteExpense 
};