import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { User } from '../models';

export type CreateUserInput = InferCreationAttributes<User>;
export type UserFilters = Partial<InferAttributes<User>>;