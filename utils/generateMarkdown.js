// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  > ${data.description}

 ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Licence](#Licence)
  - [Test](#Test)
  -[Repository](#Repository)

 ## Installation
// //         ${data.installation}
 ## Usage
// // ${data.usage}

## Contributors
// // ${data.contributing}
## Licence
![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Test
// // ${data.test}
 ## Repository
// // - [Project Repo](${data.repo})

 `;

}
module.exports = generateMarkdown;

// - [Repository Link](#Repository)
// - [GitHub Info](#GitHub) 