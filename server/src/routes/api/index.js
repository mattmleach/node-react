const router = require("express").Router();
const jobsController = require("../../controllers/jobs.js");
const usersController = require("../../controllers/users.js");
const reportsController = require("../../controllers/reports.js");

router.use("/jobs", jobsController);
router.use("/users", usersController);
router.use("/reports", reportsController);

module.exports = router;
