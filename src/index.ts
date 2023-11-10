import dotenv from "dotenv";
import { app, httpServer } from "./server";
import Middleware from "./middleware";
import routes from "./routes";
import { requestLoggerMiddleware } from "./log/requestLogger";
import { log } from "./log";
import { loadFakeData } from "./faker";
dotenv.config();
require("./sequelize");

// MIDDLEWARE:
Middleware(app);

//LOG MIDDLEWARE:
app.use(requestLoggerMiddleware);

// ROUTES
routes(app);

// EXCEPTIONAL ERROR-HANDLING
app.use(function onError(err, req, res, next) {
  log.error(err);
  res.status(500).json({
    error: true,
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;
let isServerRestarting = true;

httpServer.listen(PORT, async () => {
  if (isServerRestarting) {
    await loadFakeData(); // FOR LOAD FAKE DATA ON DATABASE
  }
  log.info("Server running at", PORT);
  console.log(`Server running at ${PORT}`);
});
