import {InferAttributes, InferCreationAttributes} from 'sequelize'
import {Invoice} from '../models'

export type CreateInvoiceInput = InferCreationAttributes<Invoice>;
export type InvoiceFilters = Partial<InferAttributes<Invoice>>