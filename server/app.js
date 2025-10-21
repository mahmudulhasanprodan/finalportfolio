// External imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')
const path = require("path");


// Internal Imports
const {notFoundHandler,errorHandler} = require("./ErrorHandler/errorHandler")
const userRouter = require('./Route/userRouter')

const app = express();
dotenv.config();

// Cors
// app.use(cors({
//  origin : "https://finalportfolio-fronend.onrender.com/",
//  methods : "GET,PUT,POST,DELETE",
// }))
app.use(cors({
  origin: "https://finalportfolio-coco.onrender.com",
  methods: ["GET", "POST"],
  credentials: true,
}));

// Database Connection 
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log("Database Successfully Connected"))
.catch((err) => console.log(err))

// Request Parser
app.use(express.json());
app.use(express.urlencoded({extended : true}))


// Route handler
app.use("/usersms", userRouter);

//  === Serve Frontend in Production ===  //
app.use(express.static(path.join(__dirname, "my-project" , "dist" )));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "my-project", "dist", "index.html"));
});


// not found handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

app.listen(process.env.PORT,() => {
     console.log(`Listening to port ${process.env.PORT}`)
});
