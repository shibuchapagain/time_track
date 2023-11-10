import NodeCache from "node-cache";
import * as Models from "./../../model/index";
import { Op } from "sequelize";
import { throwError } from "../../utils/responseHandler";
import { QueryInterface, QueryObjectType } from "./interface";

// FOR CACHING:
const cache = new NodeCache({ stdTTL: 600 });

export const getNewsArticle = async (
  section: string,
  { pageSize, offset = 0, currentPage = 1 }: QueryInterface
): Promise<unknown> => {
  const cacheKey = `news:${section}:${pageSize}:${offset}:${currentPage}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const sectionRegex = /^[a-z]+(-[a-z]+)*$/;
  if (!sectionRegex.test(section) || !section?.match("-")) {
    throwError(
      400,
      "Invalid section name. Section must be in kebab-case format."
    );
  }
  pageSize = +pageSize || 3;
  currentPage = +currentPage || 1;
  offset = (currentPage - 1) * pageSize;
  const order = [["id", "DESC"]];
  const QueryObject: QueryObjectType = {
    limit: pageSize,
    offset,
    where: {
      type: {
        [Op.like]: `%${section}%`,
      },
    },
    order,
  };
  const { count, rows } = await Models.NewsArticle.findAndCountAll(QueryObject);
  const response = {
    status: "ok",
    total: count,
    startIndex: offset + 1,
    pageSize,
    currentPage,
    pages: Math.ceil(count / pageSize),
    results: rows,
  };
  cache.set(cacheKey, response);
  return response;
};
