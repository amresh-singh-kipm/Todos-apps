import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteTaskClient,
  getTask,
  readTask,
} from "../redux/action/TaskAction";
import { config } from "../utils/constApi";

function Home() {
  const dispatch = useDispatch();
  const allTask = useSelector((state) => state?.allTask?.tasks);
  const [deleteItem, setDeleteItem] = useState(false);
  const navigate = useNavigate();
  // console.log(allTask);
  //function to get all task

  // const getTask = () => {
  //   fetch(`${config.host}${config.task.read}`)
  //     .then((data) => data.json())
  //     .then((resp) => dispatch(readTask(resp)))
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    getTask();
    dispatch(getTask());
  }, [deleteItem]);

  //function to delete task

  const deleteTask = (id) => {
    dispatch(deleteTaskClient(id));
    setDeleteItem(!deleteItem);
    // fetch(`${config.host}${config.task.delete}/${id}`, {
    //   method: "DELETE",
    //   headers: config.headers,
    //   body: JSON.stringify(),
    // })
    //   .then((resp) => setDeleteItem(!deleteItem))
    //   .catch((error) => console.log(error));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        {allTask?.length > 0 ? (
          allTask?.map((item) => {
            const { task, id, completed } = item;
            return (
              <tbody style={{ textAlign: "center" }} key={id}>
                <tr>
                  <td>{id}</td>
                  <td>{task}</td>
                  <td>{completed}</td>
                  <td>
                    <button onClick={() => navigate(`/createtask/?id=${id}`)}>
                      Update
                    </button>{" "}
                  </td>
                  <td>
                    <button onClick={() => deleteTask(id)}> Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          // console.log("data for home",allTask)
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td></td>
              <td>{allTask?.task}</td>
              <td>{allTask?.completed}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Home;
