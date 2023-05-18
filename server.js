const express = require("express");
const app = express(); // app express
const port = 8080; // declare prot

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/test", (req, res) => {
  res.send("<h1>PhuongDZ</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
