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
    "MIT License": "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
    "GPLv3": "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.",
    "GNU AGPLv3": "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.",
    "GNU LGPLv3": "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.",
    "Mozilla Public License 2.0": "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.",
    "Apache License 2.0": "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
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


  
  # Description
  ${data.description}

  # Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Test)
  - [Questions](#Questions)

  # Installation 
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  ${licenseBadge}

  ${licenseLinking}

  Copyright (c) [2021] ${data.name} 
  ${licenseInformation}


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
