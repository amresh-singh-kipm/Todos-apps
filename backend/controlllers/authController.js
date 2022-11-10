const { db } = require("../database/dataBase");
const jwt = require("jsonwebtoken");

exports.signInUserController = (req, res) => {
  const { email, password } = req.body;

  const regax =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // console.log(req.body);
  let sql = `SELECT * FROM user_info WHERE email='${email}' AND password= '${password}'`;
  if (email?.match(regax)) {
    if (password == "") {
      res.status(400).send("PASSWORD FIELD IS EMPTY");
      return;
    }
    db.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      }
      if (result.length == 0) {
        return res.status(401).send("EMAIL OR PASSWORD IS  INCORRECT");
      }
      return jwt.sign({ user: result }, "secretkey", (err, token) => {
        res.json({
          token,
          result,
        });
      });
    });
  } else if (email == ""||email==undefined) {
    res.status(400).send("PROVIDE EMAIL");
  } else {
    res.status(404).send("INVALID EMAIL");
  }
};

exports.signUpUserController = (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  let sql = `INSERT INTO user_info(name,email,password,role) VALUES('${name}','${email}','${password}',"STUDENT")`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return res.send("Account is created successfully");
  });
};


