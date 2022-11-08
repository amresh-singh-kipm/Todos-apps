const express = require("express");
const { connection } = require("./database/dataBase");
const app = express();
const cors = require('cors');

// MY ROUTES
const taskRoutes = require("./routes/taskRoutes")

// DB CONNECTION
connection()

// MIDDLEWARES
app.use(express.json());
app.use(cors());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// API ROUTES
app.use("/api", taskRoutes)


app.listen(3000);
