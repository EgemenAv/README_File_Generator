const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Please enter the project\'s name (Required)',
        validate: function (value) {
            if (value) {
                return true;
            }
            console.log('Please enter a project name');
            return false;
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username (Required)',
        validate: function (value) {
            if (value) {
                return true;
            }
            console.log('Please enter a username');
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email (Required)',
        validate: function (value) {
            if (value) {
                return true;
            }
            console.log('Please enter an email address');
            return false;
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter a short description for the project (Required)',
        validate: function (value) {
            if (value) {
                return true;
            }
            console.log('Please enter a description');
            return false;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['None','MIT', 'ISC', 'IBM','Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter the dependencies that must be installed'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute to the repository'
    },
    {
        type: 'input',
        name: 'info',
        message: 'Please enter any further information here'
    }
];

async function inquiry() {
    const answers = await inquirer.prompt(questions);

    console.log(answers);
}

inquiry();