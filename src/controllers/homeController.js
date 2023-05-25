const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTest = (req, res) => {
  res.render("exsample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getTest,
};
