const models = require("../models");
const Sequelize = require("sequelize");

async function getJobs() {
  let jobs = await models.sequelize.query(
    "SELECT job_number as jobNumber, start_time as startTime, end_time as endTime, process_date as processDate FROM jobs",
    {
      type: Sequelize.QueryTypes.SELECT
    }
  );

  return jobs;
}

module.exports = { getJobs };
