import express from "express";
import News from "./routes";

export default (app: express.Application): void => {
  News(app);
};
