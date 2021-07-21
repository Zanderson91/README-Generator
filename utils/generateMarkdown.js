// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType === 'MIT License') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}

  [badge](https://img.shields.io/badge/license/${data.license}/brightgreen)
  https://img.shields.io/github/license/Zanderson91/README-generator

  #Description
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
