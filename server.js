const inquirer = require('inquirer');
const mysql = require('mysql2');

//Connects to MySQL DB
const db = mysql.createConnection(
    {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "Bobcat95!",
      database: "employee_db",
    },
  );
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });

  function init() {
    inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Please select what you would like to do",
        choices: [
          "View All Employees",
          "Add an Employee",
          "Update an Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add a Department",
        ],
        loop: true,
      },
    ])

  //Pulls data from the employee database when the user selects ViewAllEmployees
  function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
      });
  }
  }
init();