import { Users } from "./Users";
import { Categories } from "./Categories";
import { Expenses } from "./Expenses";
import { Providers } from "./Providers";

Users.hasMany(Expenses, { foreignKey: "userId" });
Expenses.belongsTo(Users, { foreignKey: "userId" });

Categories.hasMany(Expenses, { foreignKey: "categoryId" });
Expenses.belongsTo(Categories, { foreignKey: "categoryId" });

Providers.hasMany(Expenses, { foreignKey: "providerId" });
Expenses.belongsTo(Providers, { foreignKey: "providerId" });

export { Users, Expenses, Categories, Providers };   