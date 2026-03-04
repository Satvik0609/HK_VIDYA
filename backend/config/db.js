const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Satvik@12345",
  database: "donation_db",
});

module.exports = db.promise();