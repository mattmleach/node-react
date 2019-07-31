const router = require("express").Router();
const jobsController = require("../../controllers/jobs.js");
const usersController = require("../../controllers/users.js");

router.use("/jobs", jobsController);
router.use("/users", usersController);

module.exports = router;
