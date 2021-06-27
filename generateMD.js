const fs = require('fs');

function getLicenseSection(name) {
    if (name === 'None') {
        return '';
    }else{
        return `       
[![License: ${name}](https://img.shields.io/badge/License-${name.replace(/\s/g, '%20')}-informational.svg)](https://opensource.org/licenses/${name.replace(/\s/g, '-')})`;
    }
}

function generateMD(answers) {
    const text = `
  # Project Title : ${answers.projectName}
      

  ## Description

    ${answers.desc}


  ## Table of Contents

  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Information](#information)
     

  ## Installation

    ${answers.install}


  ## License
  ${getLicenseSection(answers.license)}
    
    ${answers.license}

  ## Contributing

    ${answers.contribute}


  ## Tests


  ## Questions

  Github User Name:  [${answers.username}](https://github.com/${answers.username})
    
  Email Address :   ${answers.email}
   
    
  ## Information
     
    ${answers.info}
   
    `;

    fs.writeFile('README.md', text,  err => {
        if (err) throw err;});;
}


module.exports = {generateMD};