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
    "": ""
  }
  return licenses[type];
}

console.log(renderLicenseBadge("MIT License"));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseL) {
    const licenseLink = {
    "MIT License": "[License: MIT](https://opensource.org/licenses/MIT)",
    "GPLv3": "[License: GPL v3](http://www.gnu.org/licenses/gpl-3.0)",
    "GNU AGPLv3": "[License: AGPL v3](http://www.gnu.org/licenses/agpl-3.0)",
    "GNU LGPLv3": "[License: LGPL v3](http://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla Public License 2.0": "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)",
    "Apache License 2.0": "[License](https://opensource.org/licenses/Apache-2.0)",
    "": ""

  }
  return licenseLink[licenseL];
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(info) {
      const licenseInfo = {
    "MIT License": "Copyright (c) [2021] [${data.name}] Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
    "GPLv3": "[License: GPL v3](http://www.gnu.org/licenses/gpl-3.0)",
    "GNU AGPLv3": "[License: AGPL v3](http://www.gnu.org/licenses/agpl-3.0)",
    "GNU LGPLv3": "[License: LGPL v3](http://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla Public License 2.0": "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)",
    "Apache License 2.0": "[License](https://opensource.org/licenses/Apache-2.0)",
    "": ""

  }
  return licenseInfo[info];
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLinking = renderLicenseLink(data.license);
  let licenseInformation = renderLicenseSection(data.license)

  return `

  ${licenseBadge}




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

  # Installation Details 
  ${data.installation}

  # Usage :battery:
  ${data.usage}

  # License :envelope:
  ${data.license}

  ${licenseBadge}

  ${licenseLinking}

  ${licenseInformation}


  # Contributing 
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
