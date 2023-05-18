// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { title } = require('process');
const { rejects } = require('assert');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please type the title of your project.',
        validate: titleInput => {

            if (titleInput) {
                return true;
            } else {
                console.log('Please ensure that you enter your project title!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your gitHub username',
        validate: usernameInput => {

            if (usernameInput) {
                return true;
            } else {
                console.log('Please ensure that you entered gitHub username!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address',
        validate: usernameInput => {

            if (usernameInput) {
                return true;
            } else {
                console.log('Please ensure that you entered email address!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'descriptionWhat',
        message: 'Please enter what your project is!',
        validate: descriptionwhatInput => {

            if (descriptionwhatInput) {
                return true;
            } else {
                console.log('Please ensure that you entered what your project is!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'descriptionWhy',
        message: 'Please enter why your created your project!',
        validate: descriptionwhyInput => {

            if (descriptionwhyInput) {
                return true;
            } else {
                console.log('Please ensure that you entered why your created your project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'descriptionHow',
        message: 'Please enter how someone will use your project!',
        validate: descriptionhowInput => {

            if (descriptionhowInput) {
                return true;
            } else {
                console.log('Please ensure that you entered how someone will use your project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter detailed installation instrustions!',
        validate: installationinstrustionsInput => {

            if (installationinstrustionsInput) {
                return true;
            } else {
                console.log('Please ensure that you entered detailed installation instrustions!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please enter instructions for use of your project!',
        validate: usageinstructionsInput => {

            if (usageinstructionsInput) {
                return true;
            } else {
                console.log('Please ensure that you entered detailed instructions for use of your project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter instructions on how to test your project.',
        validate: testinstructionsInput => {
            if (testinstructionsInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmdevContributers',
        message: 'Allow other developers to contribute to your project?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter guidelines for contributing developers!',
        when: ({ confirmdevContributers }) => {
            if (confirmdevContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerdevsInput => {
            if (contributerdevsInput) {
                return true;
            } else {
                console.log('Please enter guidelines for your contributers!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file

const writetoFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.writeFile('C:\Users\casef\BOOTCAMP-UNIADEL\Professional-Readme-Generator-NodeJS\content', fileName, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writetoFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})