import { Response } from "express";
import xml2js from "xml2js";
import * as NewsService from "./service";
import { log } from "../../log";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../../utils/responseHandler";

export const getNewsArticle = async (req, res: Response): Promise<any> => {
  try {
    const response = await NewsService.getNewsArticle(
      req.params.section,
      req.query
    );
    // CONVERT XML FORMAT:
    if (req.headers.accept === "application/xml") {
      const builder = new xml2js.Builder();
      const xml = builder.buildObject(response);
      res.set("Content-Type", "application/xml");
      sendSuccessResponse({ response: xml, res });
    } else {
      sendSuccessResponse({ response, res });
    }
  } catch (err) {
    log.error(err);
    sendErrorResponse({ err, code: err?.code, res });
  }
};
