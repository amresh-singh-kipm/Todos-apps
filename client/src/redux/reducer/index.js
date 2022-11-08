import { combineReducers } from "redux";
import {
  createTaskReducer,
  deleteTaskReducer,
  readTaskReducer,
  updateTaskReducer,
} from "./TaskReducer";

export const reducer = combineReducers({
  allTask: readTaskReducer,
  crateTask: createTaskReducer,
  updateTask: updateTaskReducer,
  deleteTask: deleteTaskReducer,
});

export default reducer;
