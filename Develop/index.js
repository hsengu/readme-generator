// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is your project name? (Required) : ",
                   "Enter a description for your project (Required) : ",
                   "Enter installation instructions for your project (Required)",
                   "Enter usage information for your project (Required)",
                   "Enter contribution information for your project (Required)",
                   "Enter test information for your project (Required)",
                   "Does your project have a license?",
                   "Which license does your project use?"
                  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile("README.md", generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt([
      
   ]);
}

// Function call to initialize app
init();
