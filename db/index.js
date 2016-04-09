var mysql = require('mysql');
require('dotenv').load();


if (!process.env.deployCheck){
  var connection = mysql.createConnection({
    user: "root",
    password: "",
    database: "obie"
  })
  // var connection = mysql.createConnection({
  //   host: process.env.DBHOST,
  //   user: process.env.DBUSER,
  //   password: process.env.DBPASS,
  //   database: process.env.DATABASE 
  // });
} else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}


connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = connection;
