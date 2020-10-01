// array of questions for user
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// Ba
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the project usage?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributing parties?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the project tests?",
  },
  {
    type: "checkbox",
    message: "What is your project license under?",
    name: "license",
    choices: [
      {
        name: "MIT",
        value: "MIT",
      },
      {
        name: "Apache 2.0",
        value: "Apache2.0",
      },
      {
        name: "GPL",
        value: "GPL",
      },
      {
        name: "ISC",
        value: "ISC",
      },
    ],
  },
//     {
//     type: "input",
//     name: "username",
//     message: "What is your github user name?",
//   },
//   {
//     type: "input",
//     name: "repo",
//     message: "What is your repo link?",
//   },
];
// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd, fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// function call to initialize program
init();
