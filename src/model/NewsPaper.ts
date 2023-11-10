import sequelize from "./../../src/sequelize";
import { DataTypes } from "sequelize";

export interface NewsArticleInterface {
  id: number;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

const NewsArticle = sequelize.define("newsArticles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
  },
  sectionId: {
    type: DataTypes.STRING,
  },
  sectionName: {
    type: DataTypes.STRING,
  },
  webPublicationDate: {
    type: DataTypes.STRING,
  },
  webTitle: {
    type: DataTypes.STRING,
  },
  webUrl: {
    type: DataTypes.STRING,
  },
  apiUrl: {
    type: DataTypes.STRING,
  },
  isHosted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  pillarId: {
    type: DataTypes.STRING,
  },
  pillarName: {
    type: DataTypes.STRING,
  },
});

export { NewsArticle };
