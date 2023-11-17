// Entry point into node.js http server
import cors from "cors";
import express from "express";
import Hello from "./hello.js";
// const express = require("express");
import Lab5 from "./lab5.js";

const app = express();
app.use(cors());

Hello(app);
Lab5(app);


app.use(express.json());


// const hello = (req, res) => {
//     res.send("Life is Good!");
// };

// app.get("/hello", hello);

// app.get("/a5", Lab5(app));

// app.get("/", (req, res) => {
//     res.send("Welcome to Assignment 5!");
    
// });


app.listen(4000);

