import {InferAttributes, InferCreationAttributes} from 'sequelize'
import { Providers } from '../models'

export type CreateProvidersInput = InferCreationAttributes<Providers>
export type ProvidersFilters = Partial<InferAttributes<Providers>>