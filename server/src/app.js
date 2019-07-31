require("dotenv").config();
const express = require("express");
const passport = require("./config/passport-config");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");

const app = express();
app.use(passport.initialize());

app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

module.exports = app;
