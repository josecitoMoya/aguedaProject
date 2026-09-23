import { DataTypes } from 'sequelize';

import {dataBase} from '../database/index';

export const Users = dataBase.define('User', {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cuit: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  cuil: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
