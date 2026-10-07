import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import {dataBase} from '../database/index';

export class Expenses extends Model<InferAttributes<Expenses>,
InferCreationAttributes<Expenses>> {
    declare id: CreationOptional<number>;
    declare amount: number;
    declare description: string;
    declare startDate: Date;
    declare endDate: Date;
    declare categoryId: number;
    declare providerId: number;
    declare userId: number;
}

Expenses.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false

    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    providerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: dataBase,
    tableName: 'Expenses'
})