import { Expenses } from '../models';
import {CreateExpensesInput, ExpensesFilters, UpdateExpenseInput} from '../interfaces/expense.interface'
import { ServiceResponse } from '../interfaces/services.responses';

async function createExpense(input: CreateExpensesInput): Promise<ServiceResponse<Expenses>> {
  try {
    const newExpense = await Expenses.create(input);
    return { success: true, data: newExpense };
  } 
  catch (error) {
    console.error('Error creating expense:', error);
    return { success: false, errors: { message: 'Error al crear el gasto' } };
  }
}

async function getAllExpenses(): Promise<ServiceResponse<Expenses[]>> {
  try {
    const expenses = await Expenses.findAll();
    return {
        success: true,
        data: expenses,
    }
   
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return { success: false, errors: { message: 'Failed to fetch expenses' } };
  }
}

async function getExpense(filters: ExpensesFilters): Promise<ServiceResponse<Expenses | null>> {
  try {
    if (!filters.id) return { success: false, errors: { message: 'Expense ID is required' } };
    
    const expense = await Expenses.findByPk(filters.id);

    if(!expense) return { success: false, errors: {message: 'Expense not found'}}

    return {
        success: true,
        data: expense,
    }
  } catch (error) {
    console.error('Error fetching expense:', error);
    return { success: false, errors: { message: 'Failed to fetch expense' } };
  }
}

async function updateExpense(id: number, data: UpdateExpenseInput): Promise<ServiceResponse<Expenses>> {
  try {
    const expense = await Expenses.findByPk(id);

    if (!expense) return { success: false, errors: { message: 'Expense not found' } };

    await expense.update(data);

    return { success: true, data: expense };

  } 
  
  catch (error) {
  
    console.error('Error updating expense:', error);
  
    return { success: false, errors: { message: 'Failed to update expense' } };
  }
  
}

async function deleteExpense(id: number): Promise<ServiceResponse<boolean>> {
  try {
    const expense = await Expenses.findByPk(id);
    
    if (!expense) return { success: false, errors: { message: 'Expense not found' } };

    await expense.destroy();

    return { success: true, data: true };
  } 
  
  catch (error) {
    console.error('Error deleting expense:', error);
    return { success: false, errors: { message: 'Failed to delete expense' } };
  }
}

export const ExpensesServices = {
  createExpense,
  getAllExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
};