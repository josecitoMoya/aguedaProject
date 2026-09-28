import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Categories } from '../models';

export type CreateCategoryInput = InferCreationAttributes<Categories>;
export type CategoryFilters = Partial<InferAttributes<Categories>>;