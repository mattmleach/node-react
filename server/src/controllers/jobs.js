const router = require("express").Router();
const jobsService = require("../services/jobs");

router.get("/", async (req, res) => {
  let jobs = await jobsService.getJobs();
  res.json(jobs);
});

module.exports = router;
