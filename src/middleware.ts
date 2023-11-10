import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";

export default (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(compression());
};
