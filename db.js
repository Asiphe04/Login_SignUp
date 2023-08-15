const mysql = require("mysql2");


    const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4960",
  database: "login",
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query("SELECT * FROM users", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });


module.exports = connection;
