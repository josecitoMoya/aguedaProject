import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { dataBase } from '../database/index';

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare dni: number;
  declare cuit: string;
  declare cuil: string;
  declare phonenumber: string;
  declare address: string;
  declare city: string;
  declare province: string;
  declare mail: string;
  declare role: string;
  declare type: string;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false },
    dni: { type: DataTypes.INTEGER, allowNull: false },
    cuit: { type: DataTypes.STRING(11), allowNull: false },
    cuil: { type: DataTypes.STRING(11), allowNull: false },
    phonenumber: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    province: { type: DataTypes.STRING, allowNull: false },
    mail: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: dataBase,
    tableName: 'Users',
  }
);