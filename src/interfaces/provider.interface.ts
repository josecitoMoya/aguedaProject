import {InferAttributes, InferCreationAttributes} from 'sequelize'
import { Provider } from '../models'

export type CreateProvidersInput = InferCreationAttributes<Provider>
export type ProvidersFilters = Partial<InferAttributes<Provider>>
export type UpdateProviderInput = Partial<InferAttributes<Provider>>;
