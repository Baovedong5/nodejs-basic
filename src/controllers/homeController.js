const connection = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];

  connection.query("SELECT * FROM Users u", function (err, results, fields) {
    users = results;
    console.log(">>> results = ", results); // results contains rows returned by server

    // console.log(">>> check users: ", users);
    res.send(JSON.stringify(users));
  });
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
