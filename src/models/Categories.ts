import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { dataBase } from '../database/index';

export class Categories extends Model<
  InferAttributes<Categories>,
  InferCreationAttributes<Categories>
> {
  declare id: CreationOptional<number>;
  declare name: string;
}

Categories.init(
  {
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    name: {type: DataTypes.STRING,allowNull: false}
  },
  {
    sequelize: dataBase,tableName: 'Categories',
  }
);