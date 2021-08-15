// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
                     type: 'input',
                     name: 'name',
                     message: 'What is your project name? (Required) : ',
                     validate: nameInput => {
                        if(!nameInput)
                           console.log('You must enter a project name!');
                        return nameInput !== '';
                     }
                   },
                   {
                     type: 'input',
                     name: 'description',
                     message: 'Enter a description for your project (Required) : ',
                     validate: descriptionInput => {
                        if(!descriptionInput)
                           console.log('You must enter a description!');
                        return descriptionInput !== '';
                     }
                   },
                   {
                     type: 'input',
                     name: 'instructions',
                     message: 'Enter installation instructions for your project (Required)',
                     validate: instructionsInput => {
                        if(!instructionsInput)
                           console.log('You must enter installation instructions!');
                        return instructionsInput !== '';
                     }
                   },
                   {
                     type: 'input',
                     name: 'usage',
                     message: 'Enter usage information for your project (Required)',
                     validate: usageInput => {
                        if(!usageInput)
                           console.log('You must enter usage instructions!');
                        return usageInput !== '';
                     }
                   },
                   {
                     type: 'input',
                     name: 'contribution',
                     message: 'Enter contribution information for your project (Required)',
                     validate: contributionInput => {
                        if(!contributionInput)
                           console.log('You must enter contribution instructions!');
                        return contributionInput  !== '';
                     }
                   },
                   {
                     type: 'input',
                     name: 'test',
                     message: "Enter test information for your project (Required)",
                     validate: testInput => {
                        if(!testInput)
                           console.log('You must enter test information!');
                        return testInput  !== '';
                     }
                   },
                   {
                     type: 'confirm',
                     name: 'hasLicense',
                     message: 'Does your project have a license?',
                     default: true
                   },
                   {
                     type: 'list',
                     name: 'license',
                     message: 'Which license does your project use?',
                     choices: ['Apache License 2.0', 'GNU GPL v2', 'GNU GPL v3', 'ISC License', 'MIT License'],
                     when: ({hasLicense}) => hasLicense
                   }
                  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then(answers => console.log(answers));
}

// Function call to initialize app
init();
