const express = require("express");
const routerAPI = express.Router();

const {
  getUsersApi,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");

const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  putUpdateCustomer,
  deleteUpdateCustomer,
  deleteBulkCustomer,
} = require("../controllers/customerController");

routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomer);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteUpdateCustomer);
routerAPI.delete("/customers-many", deleteBulkCustomer);

module.exports = routerAPI;
