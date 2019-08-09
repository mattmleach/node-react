const models = require("../models");
const Sequelize = require("sequelize");
const Report = require("../models").Report;

async function getReports() {
  return await Report.findAll();
}

module.exports = { getReports };
