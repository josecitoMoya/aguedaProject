import { User } from "./Users";
import { Category } from "./Categories";
import { Expenses } from "./Expenses";
import { Provider } from "./Providers";
import { Invoice } from "./Invoice";

// User.hasMany(Expenses, { foreignKey: "userId" });
// Expenses.belongsTo(User, { foreignKey: "userId" });

// Category.hasMany(Expenses, { foreignKey: "categoryId" });
// Expenses.belongsTo(Category, { foreignKey: "categoryId" });

// Provider.hasMany(Expenses, { foreignKey: "providerId" });
// Expenses.belongsTo(Provider, { foreignKey: "providerId" });

// Expenses.hasMany(Invoice, { foreignKey: "expenseId" });
// // Invoice.belongsTo(Expenses, { foreignKey: "expenseId" });

export { User, Expenses, Category, Provider, Invoice };   