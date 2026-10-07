import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { User } from '../models';

export type CreateUserInput = InferCreationAttributes<User, { omit: 'id' }>;
export type UserFilters = Partial<InferAttributes<User>>;
export type UpdateUserInput = Partial<InferAttributes<User>>;
