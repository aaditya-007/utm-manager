const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("aditya1", "root", "12345678", {
  dialect: "mysql",
  host: "localhost"
});

module.exports =  sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    database: 'aditya1',
//    password: 'root'
// });

// module.exports = pool.promise();
