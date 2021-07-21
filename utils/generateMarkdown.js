// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseType) {
  let yourLicense = "";
  if(yourLicense === 'MIT License') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (yourLicense === 'GPLv3') {
    return `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (yourLicense === 'GPL') {
    yourLicense = `[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)]`
  } 
  return yourLicense;
};

function generateMarkdown(data) {
    let licenseBadge= renderLicenseBadge(licenseType)
    return `${data.license}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(licenseType)
    return `${data.license}`
}
  return `#${data.title}

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
  let someVar = someFunction(someParameter)
    return `${someVar}`
}
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


module.exports = generateMarkdown;
