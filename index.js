const fs = require("fs");
const inquirer = require("inquirer")
const util = require("util");

const appendFileAsync = util.promisify(fs.readFile);
const readFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "projName",
            default: "name"
        },
        {
            type: "input",
            message: "Enter description of project.",
            name: "description",
            default: "name"

        },
        {
            type: "input",
            message: "what are the installation instructions?",
            name: "installation",
            default: "name"

        },
        {
            type: "input",
            message: "What is the usage information?",
            name: "usage",
            default: "name"

        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "guidelines",
            default: "name"

        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test",
            default: "name"

        },
        {
            type: "list",
            message: "What license are you using?",
            name: "license",
            choices: [
                "GPL",
                "AGPL",
                "LGPL"
            ],
            default: "name"

        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github",
            default: "sophiaorlando"

        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
            default: "name"

        },
    ]).then((userResponse) => {
        console.log(userResponse)
        const data = writeMd(userResponse)
        fs.writeFile("README.md", data, function () {
            console.log("success!")
        })


    }).catch(function (err) {
        console.log(err);
    });

function writeMd(userObj) {
    console.log(userObj)
    return `


[![License: GPL v2](https://img.shields.io/badge/License-${userObj.license}%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/${userObj.license}-2.0.en.html)



# ${userObj.projName}


## Description 
 
### ${userObj.description}

## Table of contents

### [1. Description](#description)
### [2. Installation](#installation)
### [3. Usage](#usage)
### [4. License](#license)
### [5. Contributing](#contributing)
### [6. Tests](#tests)
### [7. Questions](#questions)




## Installation

### ${userObj.installation}


## Usage

### ${userObj.usage}


## License

### ${userObj.license}


## Contributing

### ${userObj.guidelines}


## Tests

### ${userObj.test}


## Questions

### https://github.com/${userObj.github}
### ${userObj.email}

`

}

