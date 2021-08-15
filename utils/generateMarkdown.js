// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = '';

  if(license) {
    let licenseName = license.replace(/ +/g, '%20');
    let colorExt = 'blue.svg';
    let link = 'https://img.shields.io/badge/';

    result = '[![License: ' + license + '](' + link + 'License-' + licenseName + '-' + colorExt + ')]';
  }

  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result = '';

  if(license) {
    switch(license) {
      case 'Apache License 2.0': result = '(https://opensource.org/licenses/Apache-2.0)';
                        break;
      case 'GNU GPL v2': result = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
                        break;
      case 'GNU GPL v3': result = '(https://www.gnu.org/licenses/gpl-3.0)';
                        break;
      case 'ISC License': result = '(https://opensource.org/licenses/ISC)';
                        break;
      case 'MIT License': result = '(https://opensource.org/licenses/MIT)';
                        break;
      default: result = '';
    }
  }

  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = '';

  if(license) {
    result = `## License
  ${renderLicenseBadge(license) + renderLicenseLink(license)}
    `
  }

  return result;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description.replace(/\n/g, '<br/>')}

## Installation
  ${data.instructions.replace(/\n/g, '<br/>\t')}

## Usage
  ${data.usage.replace(/\n/g, '<br/>\t')}

## Contributing to ${data.title}
${data.contribution.replace(/\n/g, '<br/>')}

## Test
${data.test.replace(/\n/g, '<br/>')}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
