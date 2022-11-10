const express = require("express");
const {
  readTaskController,
  createTaskController,
  readTaskByIdController,
  deleteTaskByIdController,
  updateTaskController,
} = require("../controlllers/taskController");

const {
  signUpUserController,
  signInUserController,
 
} = require("../controlllers/authController");

const { adminController, deleteUserController, createUserController, updateUserController} = require("../controlllers/adminController")

const router = express.Router();

router.param("id", readTaskByIdController);
router.param("tid", deleteTaskByIdController);
router.param("updateId", updateTaskController);
router.param("userId",deleteUserController);
router.param("uid",updateUserController);


// TASK ROUTE
router.post("/v1/task/create", createTaskController);
router.get(`/v1/task/read/:id`, readTaskByIdController);
router.get("/v1/task/read", readTaskController);
router.delete("/v1/task/delete/:tid", deleteTaskByIdController);
router.put("/v1/task/update/:updateId", updateTaskController);
router.post("/v1/task/user/signup", signUpUserController);
router.post("/v1/task/user/signin", signInUserController);

// ADMIN ROUTE
router.get("/v1/user",adminController)
router.post("/v1/user/create",createUserController);
router.delete("/v1/user/delete/:userId", deleteUserController);
router.put("/v1/user/update/:uid", updateUserController);

module.exports = router;
