// Entry point into node.js http server

import express from "express";
// const express = require("express");
import Lab5 from "./lab5";


const app = express();





const hello = (req, res) => {
    res.send("Life is Good!");
};

app.get("/hello", hello);

app.get("/", (req, res) => {
    res.send("Welcome to Assignment 5!");
});

Lab5(app);

app.listen(4000);

