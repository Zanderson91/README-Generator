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
  
  ${licenseBadge}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)


  # ${data.title}


  
  # Description :page_with_curl:
  ${data.description}

  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Tests](#test)
  - [Questions](#questions)

  # Installation Details :open_file_folder:
  ${data.installation}

  # Usage :battery:
  ${data.usage}

  # License :envelope:
  ${data.license}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)


  # Contributing :family:
  ${data.contribution}

  # Test :arrows_counterclockwise:
  ${data.test}

  # Questions  :raising_hand:
  ${data.questions}
  Github: [${data.username}] (https://github.com/${data.username})
  Email me your questions: ${data.email}
`;
}

module.exports = generateMarkdown;
