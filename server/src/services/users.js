const models = require("../models");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const User = require("../models").User;

async function getUsers() {
  return await User.findAll();
}

async function emailExists(email) {
  if (await User.findOne({ where: { email: email } })) {
    return true;
  } else {
    return false;
  }
}

async function register(user) {
  if (emailExists(user.email)) throw new Error("Email address already exists.");

  return await User.create({
    name: user.name,
    email: user.email,
    password: user.password
  });
}

function getToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: 900 });
}

module.exports = { getUsers, register, getToken };
