require("dotenv").config();
const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database");

const { MongoClient } = require("mongodb");

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
    //using mongoose
    await connection();

    //using mongoDB Driver
    // Connection URL
    // const url = process.env.DB_HOST_WITH_DRIVER;
    // const client = new MongoClient(url);

    // // Database Name
    // const dbName = process.env.DB_NAME;

    // await client.connect();
    // console.log("Connected successfully to server");
    // const db = client.db(dbName);
    // const collection = db.collection("customers");

    // // collection.insertOne({
    // //   name: "Phuong",
    // // });

    // let a = await collection.findOne({
    //   address: "Ha Noi",
    // });

    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to DB: ", error);
  }
})();
