import {Sequelize} from "sequelize"

export const dataBase = new Sequelize("rocasrl", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
})

