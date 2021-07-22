// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(type) {
  const licenses = {
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)",
    "GNU AGPLv3": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)",
    "GNU LGPLv3": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",

  }
  return licenses[type];
}

console.log(renderLicenseBadge("MIT License"));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);

  return `
  

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.license}/?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/?style=flat&logo=appveyor)

  # ${data.title}


  
  # Description
  ${data.description}

  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Tests](#test)
  - [Questions](#questions)

  # Installation Details
  ${data.installation}

  # Usage
  ${data.usage}

  # License 
  ${data.license}

  # Contributing
  ${data.contribution}

  # Test
  ${data.test}

  # Questions
  ${data.questions}
  Github: [${data.username}] (https://github.com/${data.username})
  Email me your questions: ${data.email}
`;
}

module.exports = generateMarkdown;
