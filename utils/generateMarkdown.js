// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
  }  else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)"
  }  else if (license === "Boost Software License 2.0") {
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (!license) return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "https://mit-license.org/"
  } else if (license === "Apache License 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0.html"
  } else if (license === "GNU AGPLv3") {
    return "https://www.gnu.org/licenses/agpl-3.0.en.html"
  } else if (license === "Mozilla Public License 2.0") {
    return "https://www.mozilla.org/en-US/MPL/2.0/"
  } else if (license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html"
  }  else if (license === "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0.en.html"
  }  else if (license === "Boost Software License 2.0") {
    return "https://www.boost.org/users/license.html"
  } else if (!license) return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return "This project is covered under the MIT License. For more information please click the link below."
  } else if (license === "Apache License 2.0") {
    return "This project is covered under the Apache License 2.0. For more information please click the link below."
  } else if (license === "GNU AGPLv3") {
    return "This project is covered under the GNU AGPLv3 License. For more information please click the link below."
  } else if (license === "Mozilla Public License 2.0") {
    return "This project is covered under the Mozilla Public License 2.0. For more information please click the link below."
  } else if (license === "GNU GPLv3") {
    return "This project is covered under the GNU GPLv3 License. For more information please click the link below."
  }  else if (license === "GNU LGPLv3") {
    return "This project is covered under the GNU LGPLv3 License. For more information please click the link below."
  }  else if (license === "Boost Software License 2.0") {
    return "This project is covered under the BSD License. For more information please click the link below."
  } else if (!license) return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseSection = renderLicenseSection(license);
  return `# ${data.title}
# Description
${data.description}
-----------------------------
## Table of Contents

-[Install](#install)

-[Use](#use)

-[Credits](#credits)

-[License](#license)

-[Contact](#contact)
## Install
${data.install}
## Use
${data.use}
## Credits
${data.collab}
## License
${licenseBadge} ${licenseSection}
${licenseLink}
## Contact
### To contribute or submit bugs, contact me at
${data.contact} or at https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
