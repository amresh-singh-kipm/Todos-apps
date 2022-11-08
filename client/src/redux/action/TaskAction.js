import { config } from "../../utils/constApi";
import { ActionType } from "../constant/Action-Type";
import axios from 'axios'

export const createTask = (task) => {
  return {
    type: ActionType.CREATE_TASK,
    payload: task,
  };
};

export const readTask = (tasks) => {
  return {
    type: ActionType.READ_TASK,
    payload: tasks,
  };
};

export const updateTask = (task) => {
  return {
    type: ActionType.UPDATE_TASK,
    payload: task,
  };
};

export const deleteTask = (task) => {
  return {
    type: ActionType.DELETE_TASK,
    payload: task,
  };
};



//API ROUTES

export const getTask = () => {
  return (dispatch) => {
    // debugger;
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source()
    console.log(source.token)
    
    axios.get(`${config.host}${config.task.read}`,{
      cancelToken:source.token,
    })
    // fetch(`${config.host}${config.task.read}`)
    //   .then((res) => res.json())
      .then((resp) => dispatch(readTask(resp.data)))
      .catch((error)=>console.log(error))
      
      // controller .abort();
  };
};



export const deleteTaskClient = (id) => {
  return (dispatch) => {
    fetch(`${config.host}${config.task.delete}/${id}`, {
      method: "DELETE",
      headers: config.headers,
      body: JSON.stringify(),
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
};

export const updateTaskClient = (id,task) =>{
  return (dispatch) =>{
    fetch(`${config.host}${config.task.update}/${id}`,{
      method:'PUT',
      headers:config.headers,
      body:JSON.stringify(task)
    })
    .then((resp)=>console.log(resp))
    .catch((error)=>console.log(error))
  }
}

export const createTaskClient = (task) =>{createTaskClient
  return (dispatch) =>{
    fetch(`${config.host}${config.task.create}`,{
      method:"POST",
      headers:config.headers,
      body:JSON.stringify(task),
    })
    .then((resp)=>console.log(resp))
    .catch((error)=>console.log(error))
  }
}