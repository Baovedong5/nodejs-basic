const express = require("express");
const path = require("path");
const app = express(); // app express
const port = 8080; // declare prot

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/test", (req, res) => {
  // res.send("<h1>PhuongDZ</h1>");
  res.render("exsample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
