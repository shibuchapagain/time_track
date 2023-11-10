import express from "express";
import News from "./container/News";

export default (app: express.Application): void => {
  News(app);

  app.get("*", (req, res) => {
    res.status(404).json({
      error: false,
      message: `This URL ${req?.url} doesn't exist on server.`,
    });
  });
};
