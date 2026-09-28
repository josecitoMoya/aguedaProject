import { User } from "./Users";
import { Categories } from "./Categories";
import { Expenses } from "./Expenses";
import { Provider } from "./Providers";

User.hasMany(Expenses, { foreignKey: "userId" });
Expenses.belongsTo(User, { foreignKey: "userId" });

Categories.hasMany(Expenses, { foreignKey: "categoryId" });
Expenses.belongsTo(Categories, { foreignKey: "categoryId" });

Provider.hasMany(Expenses, { foreignKey: "providerId" });
Expenses.belongsTo(Provider, { foreignKey: "providerId" });

export { User, Expenses, Categories, Provider };   