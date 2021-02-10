const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];
const id = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createManager () {
    
    inquirer
        .prompt([
            {
                name: "ManagerName",
                type: "input",
                message: "What is the Managers name?",
            },

            {
                name: "ManagerEmail",
                type: "input",
                message: "What is your Managers Email?",
            },

            {
                name: "ManagerId",
                type: "input",
                message: "What is your Managers Id?",
            },

            {
                name: "ManagerOfficenumber",
                type: "input",
                message: "What is your Managers Office number?",
            },
            


        ]).then(answers => {

          const manager = new Manager (answers.ManagerName, answers.ManagerEmail, answers.ManagerId, answers.ManagerOfficenumber)
            team.push(manager)
            id.push(answers.ManagerId)

            callFunction();
        });
        

}

function createEngineer () {
    
    inquirer
        .prompt([
            {
                name: "EngineerName",
                type: "input",
                message: "What is the Engineers name?",
            },

            {
                name: "EngineerEmail",
                type: "input",
                message: "What is your Engineers Email?",
            },

            {
                name: "EngineerId",
                type: "input",
                message: "What is your Engineers Id?",
            },

            {
                name: "EngineerGithub",
                type: "input",
                message: "What is your Engineer's Github?",
            },
            


        ]).then(answers => {

          const engineer = new Engineer (answers.EngineerName, answers.EngineerEmail, answers.EngineerId, answers.EngineerGithub)
            team.push(engineer)
            id.push(answers.EngineerId)

            callFunction();
        });
        

}

function createIntern () {
    
    inquirer
        .prompt([
            {
                name: "InternName",
                type: "input",
                message: "What is the Interns name?",
            },

            {
                name: "InternEmail",
                type: "input",
                message: "What is your Interns Email?",
            },

            {
                name: "InternId",
                type: "input",
                message: "What is your Interns Id?",
            },

            {
                name: "InternSchool",
                type: "input",
                message: "What is your Interns school?",
            },
            


        ]).then(answers => {

          const intern = new Intern (answers.InternName, answers.InternEmail, answers.InternId, answers.InternSchool)
            team.push(intern)
            id.push(answers.InternId)

            callFunction();
        });
        

}

function createEmployee () {
    
    inquirer
        .prompt([
            {
                name: "EmployeeName",
                type: "input",
                message: "What is the Employees name?",
            },

            {
                name: "EmployeeEmail",
                type: "input",
                message: "What is your Employees Email?",
            },

            {
                name: "EmployeeId",
                type: "input",
                message: "What is your Employees Id?",
            },
            

        ]).then(answers => {

          const employee = new Employee (answers.EmployeeName, answers.EmployeeEmail, answers.EmployeeId,)
            team.push(employee)
            id.push(answers.EmployeeId)

            callFunction();
        });
        

}

function callFunction() {

    inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "Manager",
            "I don't want to add any more team members"
          ]
        }
      ]).then(userChoice => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          case "Manager":
              createManager();
              break;  
          default:
            buildCompany();
        }

})
}

function buildCompany() {

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");
    }


callFunction();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// createObjects.outputPath(OUTPUT_DIR)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
