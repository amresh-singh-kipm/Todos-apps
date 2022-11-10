import { combineReducers } from "redux";
import {
  createTaskReducer,
  deleteTaskReducer,
  readTaskReducer,
  updateTaskReducer,
} from "./TaskReducer";
import { loginUserReducer } from "./UserReducer";

export const reducer = combineReducers({
  allTask: readTaskReducer,
  crateTask: createTaskReducer,
  updateTask: updateTaskReducer,
  deleteTask: deleteTaskReducer,
  userLogin: loginUserReducer,
});

export default reducer;
