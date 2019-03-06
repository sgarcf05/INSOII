const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require('mysql');


app.use(bodyParser.json());

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inso2'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

var sql="INSERT INTO `user` (`id`, `name`, `password`) VALUES ('8', 'Samuel', '');";

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("User inserted");
  });
global.db = db;

require("./routes") (app);

module.exports = app;