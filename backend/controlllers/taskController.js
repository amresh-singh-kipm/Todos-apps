const { resolve } = require("path");
const { db } = require("../database/dataBase");

//FUNCTION TO READ TASK

const sqlToRead = (sql) =>{
  return new Promise((resolve,reject)=>{
    db.query(sql,(err,result)=>{
      if (err) {
        reject(err);
      }
      resolve(result);
      })
  })
//  return db.query(sql,(err,result)=>{
//   if (err) {
//     return console.log(err);
//   }
//   return result;
//   })
}
exports.readTaskController = async (req, res) => {
  let sql = "SELECT * FROM TODOS";
  let task = await sqlToRead(sql)
  res.send(task)
//  await db.query(sql, (err, result) => {
//     if (err) {
//       return console.log(err);
//     }
//     return res.send(result);
//   });
};

//FUNCTION TO READ TASK BY ID

exports.readTaskByIdController = (req, res) => {
  let sql = `SELECT * FROM TODOS WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return res.send(result);
  });
};

//FUNCTION TO DELETE THE TASK

exports.deleteTaskByIdController = (req, res) => {
  console.log("ID::::", req.params.tid);
  let sql = `DELETE FROM TODOS WHERE id = ${req.params.tid}`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    if (result.length == 0) {
      return res.status(400).send("UNABLE TO DELETE");
    }
    return res.send("ITEM DELETE SUCCESSFULLY");
  });
};

//FUNCTION TO CREATE TASK

exports.createTaskController = (req, res) => {
  const { task, completed } = req.body;
  if (task == "" || completed == undefined) {
    return res.status(400).send("FIELD IS EMPTY");
  }
  // console.log(req.body);
  let sql = `INSERT INTO TODOS(task,completed) VALUES('${task}',${completed})`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return res.send("TASK IS CREATED");
  });
};

//FUNCTION TO UPDATE TASK

exports.updateTaskController = (req, res) => {
  
  const { task, completed } = req.body;
  if (
   ( task == undefined || task == "") ||
   ( completed == undefined ||completed == null)
  ) {
    res.status(400).send("INVALID INPUT");
    return;
  }
  let sql = `UPDATE TODOS SET task='${task}',completed = ${completed} WHERE id=${req.params.updateId}`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return res.send("TASK IS UPDATED SUCCESSFULLY");
  });
};

