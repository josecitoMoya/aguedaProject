import { DataTypes } from "sequelize";
import { dataBase } from "../database/index";

export const Providers = dataBase.define("Providers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  razonSocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cuit: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
      len: [11, 11], // Fuerza exactamente 11 dígitos
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});