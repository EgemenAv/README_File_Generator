const inquirer = require('inquirer');

const generateMD = require('./generateMD');

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project Name (Required):',
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
        message: 'Github username (Required):',
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
        message: 'Email (Required):',
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
        message: 'Description (Required):',
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
        choices: ['None', 'MIT', 'ISC', 'IPL 1.0', 'MBL 2.0']
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation:'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to Contribute:'
    },
    {
        type: 'input',
        name: 'info',
        message: 'Further Information:'
    }
];

async function inquiry() {

    console.log(`
    =====================
    README File Generator       
    =====================
    `);

    const answers = await inquirer.prompt(questions);

    generateMD.generateMD(answers);
}

inquiry();