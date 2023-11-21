// Entry point into node.js http server
import cors from "cors";
import express from "express";
import Hello from "./hello.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
// const express = require("express");
import Lab5 from "./lab5.js";

const app = express();
app.use(cors());
app.use(express.json());

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


app.listen(4000);

