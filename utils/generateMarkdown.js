// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(type) {
  const licenses = {
    "MIT License":
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GPLv3:
      "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    GPL: "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)]",
  };
  return licenses[type];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);

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
