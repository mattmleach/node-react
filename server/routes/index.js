const router = require("express").Router();
const users = require("./users");

router.use("/api/users", users);

router.get("/", function(req, res) {
  res.status(200).json({ message: "welcome!" });
});

module.exports = router;
