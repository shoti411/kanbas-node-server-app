// Entry point into node.js http server
import "dotenv/config";
// import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import ProjectUserRoutes from "./project/users/routes.js"
import express from "express";
import Hello from "./hello.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
// const express = require("express");
import Lab5 from "./lab5.js";
import session from "express-session";
// To have connected to kanbas database, replace project with kanbas
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING_PROJECT || 'mongodb://127.0.0.1:27017/project';
//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));


app.use(express.json());
const port = process.env.PORT || 4000;

// s
ProjectUserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);




// const hello = (req, res) => {
//     res.send("Life is Good!");
// };

// app.get("/hello", hello);

// app.get("/a5", Lab5(app));

// app.get("/", (req, res) => {
//     res.send("Welcome to Assignment 5!");

// });



app.listen(port);

