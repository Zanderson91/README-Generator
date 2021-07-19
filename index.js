// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "username",
  },

  {
    type: "input",
    message: "What is the name of your project?",
    name: "project",
  },

  {
    type: "input",
    message: "Brief description of the project..",
    name: "description",
  },

  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },

  {
    type: "input",
    message: "How can the project be used?",
    name: "usage",
  },

  {
    type: "list",
    message: "Please select a license for your project.",
    name: "license",
    choices: [
        "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err) {
            return console.log(err)
        }
        console.log("Your README.md file has been created!")
    })
}

const generateMarkdown = require ("./utils/generateMarkdown")
const writeFileAsync = util.promisify(writeToFile)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
