var mysql = require("mysql");

//create connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "konveksi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

module.exports = conn;
