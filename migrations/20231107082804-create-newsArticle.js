"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("NewsArticles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      sectionId: {
        type: Sequelize.STRING,
      },
      sectionName: {
        type: Sequelize.STRING,
      },
      webPublicationDate: {
        type: Sequelize.STRING,
      },
      webTitle: {
        type: Sequelize.STRING,
      },
      webUrl: {
        type: Sequelize.STRING,
      },
      apiUrl: {
        type: Sequelize.STRING,
      },
      isHosted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      pillarId: {
        type: Sequelize.STRING,
      },
      pillarName: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("NewsArticles");
  },
};
