// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of prompt objects for inquirer
const questions = [{
                     type: 'input',
                     name: 'title',
                     message: 'What is your project title? (Required) : ',
                     validate: titleInput => {
                        if(!titleInput)
                           console.log('You must enter a project title!');
                        return titleInput !== '';
                     }
                   },
                   {
                     type: 'editor',
                     name: 'description',
                     message: 'Enter a description for your project (Required) : ',
                     validate: descriptionInput => {
                        if(!descriptionInput)
                           console.log('You must enter a description!');
                        return descriptionInput !== '';
                     }
                   },
                   {
                     type: 'editor',
                     name: 'instructions',
                     message: 'Enter installation instructions for your project (Required)',
                     validate: instructionsInput => {
                        if(!instructionsInput)
                           console.log('You must enter installation instructions!');
                        return instructionsInput !== '';
                     }
                   },
                   {
                     type: 'editor',
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
                     type: 'editor',
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
                   },
                   {
                     type: 'input',
                     name: 'github',
                     message: 'What is your github username? (Required)',
                     validate: useridInput => {
                     if(!useridInput)
                        console.log('You must enter your github username!');
                     return useridInput  !== '';
                     }
                   },
                   {
                     type: 'input',
                     name: 'email',
                     message: 'What is your email address? (Required)',
                     validate: emailInput => {
                     if(!emailInput)
                        console.log('You must enter your email!');
                     return emailInput  !== '';
                     }
                   }
                  ];

// Function for creating the README file, returns a promise.
const writeToFile = (fileName, data) => {
   return new Promise((resolve, reject) => {
      fs.writeFile('./output/' + fileName, generateMarkdown(data), err => {
         if(err) {
            reject(err);
            return;
         }

         resolve({
            ok: true,
            message: fileName + ' created in ./output/'
         });
      });
   });
};

// Main function of the app, prints to console then calls inquirer and writeToFile functions if promises are kept.
function init() {
   console.log(`
====================
Generate a README.md
====================
   `);
   inquirer.prompt(questions).then(answers => writeToFile('README.md', answers))
                             .then(writeToFileResponse => console.log(writeToFileResponse.message));
};

// Function call to initialize app
init();
