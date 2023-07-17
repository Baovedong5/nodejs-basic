require("dotenv").config();
const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database");

const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");

const app = express(); // app express
const port = process.env.PORT || 8888; // declare prot
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

app.use("/v1/api/", apiRoutes);

//test connection

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to DB: ", error);
  }
})();
