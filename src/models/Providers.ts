import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import { dataBase } from "../database/index";

export class Provider extends Model<
  InferAttributes<Provider>,
  InferCreationAttributes<Provider> 
> {
  declare id?: number;
  declare razonSocial: string;
  declare cuit: string;
  declare address: string;
  declare city: string;
  declare province: string;
  declare phoneNumber?: string;
  declare mail?: string;
  declare categoryId: number;
}

Provider.init(
  {
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
        len: [11, 11],
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
      allowNull: true,
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
  },
  {
    sequelize: dataBase,
    tableName: "Providers",
  }
);
