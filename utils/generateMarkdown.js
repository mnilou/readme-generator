// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  > ${data.contact}

  
  ![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
`;
}

module.exports = generateMarkdown;
