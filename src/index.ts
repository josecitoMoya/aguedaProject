import app from './app/app';
import {dataBase} from "./database/index";

import "./models";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await dataBase.sync({ force: false });
    console.log("Database connected successfully.");
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
