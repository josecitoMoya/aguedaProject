import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Category } from '../models';

export type CreateCategoryInput = InferCreationAttributes<Category>;
export type CategoryFilters = Partial<InferAttributes<Category>>;