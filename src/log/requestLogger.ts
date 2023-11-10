import { log } from "./index";

export const requestLoggerMiddleware = (req, res, next) => {
  log.info(
    { URL: req.url, method: req.method },
    `Request: ${req.method} ${req.url}`
  );
  next();
};
