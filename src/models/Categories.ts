import {DataTypes} from 'sequelize';

import {dataBase} from '../database/index';

export const Categories = dataBase.define('Categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})