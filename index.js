// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
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
      "GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
    ],
  },

  {
    type: "input",
    message: "Who is contributing?",
    name: "contribution",
  },

  {
    type: "input",
    message: "Is a test included?",
    name: "test",
  },

  {
    type: "input",
    message: "What do I do if I have a question?",
    name: "questions",
  },

  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "username",
  },

  {
    type: "input",
    message: "What is your email?",
    name: "email",
  }
])
}

const generateMarkdown = require ("./utils/generateMarkdown");


// TODO: Create a function to initialize app and write the file
async function init() {
    try{
        const data = await promptUser();
        const generateResponse = generateMarkdown(data);
        await writeFileAsync('./Returned README.md', generateResponse);
        console.log('Your README has been created!');
    } catch(err) {
        console.log(err);
    }
}


// Function call to initialize app
init();
