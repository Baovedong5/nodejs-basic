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

const {
  postCreateProject,
  getAllProject,
  putUpdateProject,
  deleteProject,
} = require("../controllers/projectController");

const {
  postCreateTask,
  getAllTask,
  putUpdateTask,
  deleteTask,
} = require("../controllers/taskController");

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

routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getAllProject);
routerAPI.put("/projects", putUpdateProject);
routerAPI.delete("/projects", deleteProject);

routerAPI.post("/tasks", postCreateTask);
routerAPI.get("/tasks", getAllTask);
routerAPI.put("/tasks", putUpdateTask);
routerAPI.delete("/tasks", deleteTask);

module.exports = routerAPI;
