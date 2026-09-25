import { DataTypes, Model, Optional } from 'sequelize';
import { dataBase } from '../database/index';

interface CategoriesAttributes {
    id: number;
    name: string;
}

interface CategoriesCreationAttributes extends Optional<CategoriesAttributes, 'id'> {}

export const Categories = dataBase.define<Model<CategoriesAttributes, CategoriesCreationAttributes>>('Categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
