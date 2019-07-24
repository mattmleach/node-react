const router = require("express").Router();
const users = require("./users");
const jobs = require("./jobs");

router.use("/api/users", users);

router.use("/api/jobs", jobs);

router.get("/", function(req, res) {
  res.status(200).json({ message: "welcome!" });
});

module.exports = router;
