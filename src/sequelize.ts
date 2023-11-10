import { Sequelize } from "sequelize";
import config from "./config";

const sequelize = new Sequelize(
  config.DATABASE.NAME,
  config.DATABASE.USERNAME,
  config.DATABASE.PASSWORD,
  {
    host: config.DATABASE.HOST,
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
