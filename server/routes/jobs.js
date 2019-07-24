require("dotenv").config();
const router = require("express").Router();
const passport = require("passport");
const models = require("../models");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  models.sequelize
    .query(
      "SELECT job_number as jobNumber, start_time as startTime, end_time as endTime, process_date as processDate FROM jobs",
      {
        type: Sequelize.QueryTypes.SELECT
      }
    )
    .then(jobs => {
      res.json(jobs);
    });
});

module.exports = router;
