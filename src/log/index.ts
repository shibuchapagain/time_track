import bunyan from "bunyan";
import path from "path";
import fs from "fs";

const logPath = path.join(__dirname, "./../../logger");
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath);
}

const logLevel = {
  development: "trace",
  test: "info",
  production: "info",
};

const getLoggerConfig = (env) => {
  return {
    name: "news-article",
    streams: [
      { level: logLevel[env], stream: process.stdout },
      {
        level: "error",
        path: path.join(logPath, `news-article-${env}.error.log`),
      },
      {
        level: "info",
        path: path.join(logPath, "info.log"),
      },
    ],
    serializers: bunyan.stdSerializers,
    src: true,
    msg: `Route: {req.url} - {msg}`,
  };
};

const createLogger = (env) => {
  return bunyan.createLogger(getLoggerConfig(env));
};

const log = createLogger("development");
const logError = (req, error) => {
  const routePath = req.path;
  log.error({ req, routePath }, error);
};

export { log, logError };
