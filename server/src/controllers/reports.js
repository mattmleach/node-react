const router = require("express").Router();
const reportsService = require("../services/reports");

router.get("/", async (req, res) => {
  let reports = await reportsService.getReports();
  res.json(reports);
});

module.exports = router;
