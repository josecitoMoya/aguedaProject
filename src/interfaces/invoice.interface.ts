import {InferAttributes, InferCreationAttributes} from 'sequelize'
import {} from '../models'

export type CreateInvoiceInput = InferCreationAttributes<>;
export type InvoiceFilters = Partial<InferAttributes<>>