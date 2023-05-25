const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> req.body: ", req.body);
  res.send("create a new user");
};

module.exports = {
  getHomepage,

  postCreateUser,
};
