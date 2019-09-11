const express = require("express");
const helmet = require("helmet");

const UserRouter = require("./users/user-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/users", UserRouter);

module.exports = server;

// // ASI

// function getData(){
//     return
//     {
//         name: 'frodo'
//     }
// }

// console.log( typeof getData()); // undefined
