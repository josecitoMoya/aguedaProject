import {InferAttributes, InferCreationAttributes} from 'sequelize'
import { Expenses } from '../models'

export type CreateExpensesInput = InferCreationAttributes<Expenses>
export type ExpensesFilters = Partial<InferAttributes<Expenses>>
export type UpdateExpenseInput = Partial<InferAttributes<Expenses>>
