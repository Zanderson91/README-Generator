// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#Project <h1>${data.title}</h1>


  ## Description
  ${data.description}

  ## Table of Contents
  - [Description]
  - [Installation]
  - [Usage]
  - [License]
  - [Contributing]
  - [Tests]
  - [Questions]

  ## Installation Details
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}
  Zanderson91 Github: [${data.unsername}] (https://github.com/${data.unsername})
  Email me your questions: ${data.email}
`;
}

module.exports = generateMarkdown;
