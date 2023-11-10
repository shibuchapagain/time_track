import { Application } from "express";
import * as Controller from "./controller";
const V1_API = "/api/v1/news/";
import { ROUTES } from "./types";

export default (app: Application): void => {
  app.get(
    `${V1_API}${ROUTES.getNewsArticle}/:section`,
    Controller.getNewsArticle
  );
};
