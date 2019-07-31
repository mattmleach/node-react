const router = require("express").Router();
const homeRoute = require("./home");
const apiRoute = require("./api");

router.get("/", (req, res) => {
  res.redirect("/home");
});

router.use("/home", homeRoute);
router.use("/api", apiRoute);

router.use((req, res) => {
  return res.status(404).send({ message: `Route ${req.url} not found.` });
});

router.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).send();
});

module.exports = router;
