import {Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional} from 'sequelize'
import { dataBase } from '../database'

export class Invoice extends Model<
InferAttributes<Model>,
InferCreationAttributes<Model>> {
    declare id?: CreationOptional<number>;
    declare razonSocial: string;
    declare cuit: string
    declare phoneNumber: string
    declare adress: string
    declare city: string;
    declare province: string;
    declare mail: string;
    declare invoiceNumber: string
}

Invoice.init(
    {
        id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        razonSocial: { type: DataTypes.STRING, allowNull: false },
        cuit: { type: DataTypes.STRING(11), allowNull: false },
        phoneNumber: { type: DataTypes.STRING, allowNull: false },
        adress: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        province: { type: DataTypes.STRING, allowNull: false },
        mail: { type: DataTypes.STRING, allowNull: false },
        invoiceNumber: { type: DataTypes.STRING, allowNull: false },
    },
    {   
    sequelize: dataBase,
    tableName: 'Invoices'
    }
)