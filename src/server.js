require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");

const connection = require("./config/database");

const webRoutes = require("./routes/web");

const app = express(); // app express
const port = process.env.PORT || 8888; // declare prot
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

//test connection

// simple query
// connection.query("SELECT * FROM Users u", function (err, results, fields) {
//   console.log(">>> results = ", results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
