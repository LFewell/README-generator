// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const template = require("./utils/generateMarkdown");
const template = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe the project"
        },
        {
            type: "input",
            name: "install",
            message: "Provide instructions for install"
        },
        {
            type: "input",
            name: "use",
            message: "Provide instructions for use"
        },
        {
            type: "input",
            name: "collab",
            message: "List any collaborators, if none leave blank"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for this project",
            choices: ["GUN AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
        },
        {
            type: "input",
            name: "contact",
            message: "Enter Email or Github link"
        },
    ])
};

// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((data) => writeToFile("README.md", template(data)))
}

// Function call to initialize app
init();
