const mysql = require("mysql");

const db = mysql.createConnection({
  connectionLimit: 100, //important
  host: "localhost",
  user: "Amresh_singh",
  password: "password",
  database: "crud",
  // debug: false,
});

const connection = () => {
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("Connection Established");
  });
};

module.exports = { db, connection };
