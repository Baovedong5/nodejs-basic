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

routerAPI.get("/users", getUsersApi);

routerAPI.post("/users", postCreateUserAPI);

routerAPI.put("/users", putUpdateUserAPI);

routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileApi);

routerAPI.post("/files", postUploadMultipleFilesAPI);

module.exports = routerAPI;
