import { ActionType } from "../constant/Action-Type";

export const readTaskReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.READ_TASK:
      return {
        ...state,
        tasks: payload,
      };
    default:
      return state;
  }
};

export const createTaskReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.CREATE_TASK:
      return {
        task: payload,
      };
    default:
      return state;
  }
};

export const updateTaskReducer = (state={}, { type, payload }) => {
  switch (type) {
    case ActionType.UPDATE_TASK:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const deleteTaskReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.DELETE_TASK:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
