const getHomepage = (req, res) => {
  res.send("Hello World with Phuong");
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
