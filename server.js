const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "Bobcat95!",
      database: "department_db",
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
    .then((answers) => {
        const selectedAction = answers.action;
        if (selectedAction === "View All Employees") {
          viewAllEmployees();
        } else if (selectedAction === "Add an Employee") {
          addEmployee();
        } else if (selectedAction === "Update an Employee Role") {
          updateEmployeeRole();
        } else if (selectedAction === "View All Roles") {
          viewAllRoles();
        } else if (selectedAction === "Add a Role") {
          addRole();
        } else if (selectedAction === "View All Departments") {
          viewAllDepartments();
        } else if (selectedAction === "Add a Department") {
          addDepartment();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
      });
  }

init();