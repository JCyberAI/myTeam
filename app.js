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
            


        ]).then((answers) => {

            console.log(answers);
            console.log(answers.Employee);
            console.log(answers.Engineer);
            console.log(answers.Intern);
            console.log(answers.Manager);

        });
        

}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

createObjects();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

createObjects.outputPath(OUTPUT_DIR)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
