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

const router = express.Router();

router.param("id", readTaskByIdController);
router.param("tid", deleteTaskByIdController);
router.param("updateId", updateTaskController);
// router.param("userId", signInUserController);

// TASK ROUTE
router.post("/v1/task/create", createTaskController);
router.get(`/v1/task/read/:id`, readTaskByIdController);
router.get("/v1/task/read", readTaskController);
router.delete("/v1/task/delete/:tid", deleteTaskByIdController);
router.put("/v1/task/update/:updateId", updateTaskController);
router.post("/v1/task/user/signup", signUpUserController);
router.post("/v1/task/user/signin", signInUserController);

module.exports = router;
