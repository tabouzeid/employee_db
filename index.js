const { prompt } = require("inquirer");
const data = require("./assets/js/data");
require("console.table");

loadMainPrompts();

async function loadMainPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View All Employees By Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
        },
        {
          name: "View All Employees By Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER"
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE"
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE"
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE"
        },
        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER"
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES"
        },
        {
          name: "Add Role",
          value: "ADD_ROLE"
        },
        {
          name: "Remove Role",
          value: "REMOVE_ROLE"
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS"
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT"
        },
        {
          name: "Remove Department",
          value: "REMOVE_DEPARTMENT"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]);

  // Call the appropriate function depending on what the user chose
  switch (choice) {
    case "VIEW_EMPLOYEES":
      return data.viewEmployees();
    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      return data.viewEmployeesByDepartment();
    case "VIEW_EMPLOYEES_BY_MANAGER":
      return data.viewEmployeesByManager();
    case "ADD_EMPLOYEE":
      return data.addEmployee();
    case "REMOVE_EMPLOYEE":
      return data.removeEmployee();
    case "UPDATE_EMPLOYEE_ROLE":
      return data.updateEmployeeRole();
    case "UPDATE_EMPLOYEE_MANAGER":
      return data.updateEmployeeManager();
    case "VIEW_DEPARTMENTS":
      return data.viewDepartments();
    case "ADD_DEPARTMENT":
      return data.addDepartment();
    case "REMOVE_DEPARTMENT":
      return data.removeDepartment();
    case "VIEW_ROLES":
      return data.viewRoles();
    case "ADD_ROLE":
      return data.addRole();
    case "REMOVE_ROLE":
      return data.removeRole();
    default:
      return quit();
  }
}

function quit() {
  console.log("Goodbye!");
  process.exit();
}
