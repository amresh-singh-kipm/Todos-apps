import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  createTaskClient,
  getTaskById,
  readTask,
  updateTask,
  updateTaskClient,
} from "../redux/action/TaskAction";
import Home from "./Home";

function CreateTask() {
  //to update the task

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const id = search.get("id");
  const task = search.get("task");
  const done = search.get("done");

  //to create the task
  const dispatch = useDispatch();
  const taskToUpdate = useSelector((state) => state);

  const tasks = useSelector((state) => state.allTask.tasks);

  console.log("REDUX TASKS", tasks);
  const initialState = {
    task: "",
    completed: false,
  };
  const [taskName, setTaskName] = useState(initialState);

  //function to create task

  // const createTask = (tasks) => {
  //   fetch(`${config.host}${config.task.create}`, {
  //     method: "POST",
  //     headers: config.headers,
  //     body: JSON.stringify(tasks),
  //   })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  //function for handling value of checkboxtaskName.completed
  const handleChangeCheckbox = (e) => {
    const { name, value } = e.target;
    setTaskName({ ...taskName, [name]: !taskName.completed });

    // console.log("check",e.target)
  };

  //function for handling value of text

  const handleChage = (e) => {
    const { name, value } = e.target;
    setTaskName({ ...taskName, [name]: value });
  };

  //fuction  to update task

  // const updatetask = (id, task) => {
  //   fetch(`${config.host}${config.task.update}/${id}`, {
  //     method: "PUT",
  //     headers: config.headers,
  //     body: JSON.stringify(task),
  //   })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  //fuction to read task by id

  // const readTaskById = (id) => {
  //   fetch(`${config.host}${config.task.read}/${id}`)
  //     .then((resp) => resp.json())
  //     .then((data) =>
  //       data.forEach((element) => {
  //         setTaskName({
  //           task: element.task || "",
  //           completed: element.completed || false,
  //         });
  //       })
  //     )
  //     .catch((error) => console.log(error));
  // };

  //function for creating task

  const onSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateTaskClient(id, taskName));
      dispatch(
        readTask(
          tasks.map((item) =>
            item.id == id
              ? {
                  ...item,
                  task: taskName.task,
                  completed: taskName.completed == 0 ? 0 : 1,
                }
              : item
          )
        )
      );
    } else {
      dispatch(createTaskClient(taskName));
    }
  };

  useEffect(() => {
    if (id) {
      setTaskName({
        task: task || "",
        completed: done == 0 ? 0 : 1 || false,
      });
    }
  }, []);

  // useEffect(() => {
  //   setTaskName({})
  //   // readTaskById(id)
  //   if (id) {
  //     dispatch(getTaskById(id))
  //     taskToUpdate?.forEach((element) => {
  //       if(element.id == id){
  //         setTaskName({
  //           task: element?.task || "",
  //           completed: element?.completed || false,
  //         });
  //       }
  //     });
  //   }
  // }, []);
  console.log("single data", taskName);

  return (
    <div>
      <Home />
      <form>
        <label htmlFor="task">Task</label>
        {/* {console.log()} */}
        <input
          type="text"
          name="task"
          // defaultValue={taskToUpdate[0].task}
          value={taskName.task}
          onChange={handleChage}
        />
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          name="completed"
          checked={taskName.completed}
          value={taskName.completed}
          onChange={handleChangeCheckbox}
        />
        <button onClick={onSubmit}> Create Task </button>
      </form>
    </div>
  );
}

export default CreateTask;
