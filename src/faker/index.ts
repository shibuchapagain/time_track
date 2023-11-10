import { log } from "../log";
import { NewsArticle } from "../model";
const { fakeData } = require("./fakeData");

export const loadFakeData = async () => {
  try {
    const isAlreadyExist = await NewsArticle.findAll();
    if (isAlreadyExist?.length) {
      log.info("Data already loaded on database");
      return;
    }
    await NewsArticle.bulkCreate(fakeData);
    log.info("Load faker data to database");
  } catch (err) {
    console.log("Error on load faker data");
    log.error(err);
  }
};
