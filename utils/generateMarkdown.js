// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = '';

  if(license) {
    let licenseName = license.replace(/ +/g, '%20');
    let colorExt = 'blue.svg';
    let link = 'https://img.shields.io/badge/';

    result = '[![License: ' + license + '](' + link + 'License-' + licenseName + '-' + colorExt + ')]';
  }

  return result + renderLicenseLink(license);
}

// Function that returns the license link
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

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = '';

  if(license) {
    result = `## License
This project is licensed under ${license}`
  }

  return result;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.trim()}

${renderLicenseBadge(data.license)}
## Description
${data.description}

## Installation
\t${data.instructions.replace(/\n/g, '\n\t').trim()}

## Usage
\t${data.usage.replace(/\n/g, '\n\t').trim()}

## Contributing to ${data.title}
${data.contribution}

## Test
\t${data.test.replace(/\n/g, '\n\t').trim()}

## Questions
Contact me at the following:
- [${data.github}'s GitHub Profile](https://github.io/${data.github})
- ${data.email}

${renderLicenseSection(data.license)}
`
};

// Export generateMarkdown function
module.exports = generateMarkdown;
