const express = require("express");
const routerAPI = express.Router();

const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");

const {
  postCreateCustomer,
  postCreatArrayeCustomer,
  getAllCustomers,
  putUpdateCustomers,
  deleteACustomer,
  deleteArrayCustomer,
} = require("../controllers/customerController");

const {
  postCreateProject,
  getAllProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const {
  postCreateTask,
  updateTask,
  deleteTask,
  getAllTask,
} = require("../controllers/taskController");

//CRUD USER
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

//UPLOAD IMAGE
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);

//CRUD CUSTOMER
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreatArrayeCustomer);

routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", putUpdateCustomers);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);

//CRUD PROJECT
routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getAllProject);
routerAPI.put("/projects", updateProject);
routerAPI.delete("/projects", deleteProject);

//CRUD TASK
routerAPI.post("/tasks", postCreateTask);
routerAPI.get("/tasks", getAllTask);
routerAPI.put("/tasks", updateTask);
routerAPI.delete("/tasks", deleteTask);

//QUERY STRING
routerAPI.get("/info", (req, res) => {
  return res.status(200).json({
    data: req.query,
  });
});
routerAPI.get("/info/:name/:address", (req, res) => {
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI; //export default
