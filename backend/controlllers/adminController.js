const { db } = require("../database/dataBase");

exports.adminController = (req, res) => {
  let sql = `SELECT * FROM user_info`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return res.send(result);
  });
};

exports.createUserController = (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password, role);
  console.log(req.body);
  if (
    name == "" ||
    name == undefined ||
    email == "" ||
    email == undefined ||
    password == "" ||
    password == undefined ||
    role == "" ||
    role == undefined
  ) {
    return res.status(400).send("FIELD IS EMPTY");
  }
  let sql = `INSERT IGNORE INTO user_info(name,email,password,role) VALUES('${name}','${email}','${password}','${role}' )`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return res.send("USER IS CREATED SUCCESSFULLY");
  });
};

exports.updateUserController = (req, res) => {
  const { name, password, role } = req.body;
  console.log(req.body)
  if (
    name == "" ||
    name == undefined ||
    password == "" ||
    password == undefined ||
    role == "" ||
    role == undefined
  ) {
    return res.status(400).send("FIELD IS EMPTY");
  }
  let sql = `UPDATE user_info SET name='${name}',password='${password}',role='${role}' WHERE id=${req.params.uid}`;
  db.query(sql,(err,result)=>{
    if(err){
        return console.log(err)
    }
    return res.send("USER RECORD IS UPDATED SUCCESSFULLY")
  })
};

exports.deleteUserController = (req, res) => {
  //   console.log("first",req.params.userId)
  let sql = `DELETE FROM user_info WHERE id=${req.params.userId}`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return res.send("USER IS DELETE SUCCESSFULLY");
  });
};
