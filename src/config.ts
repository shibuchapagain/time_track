import dotenv from "dotenv";
dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3000,
  DATABASE: {
    NAME: process.env.DB_NAME || "newspaper",
    HOST: process.env.DB_HOST || "127.0.0.1",
    USERNAME: process.env.DB_USERNAME || "root",
    PASSWORD: process.env.DB_PASSWORD || "rootroot",
  },
};
export default config;
