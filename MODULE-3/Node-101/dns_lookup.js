const inquirer = require('inquirer');
const dns = require('dns');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'domain',
      message: 'Domain Name:',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers.domain;
    dns.lookup(url, function (error, address) {
      if (error) {
        console.log(error.message);
        return;
      }
      console.log('IP Address: ', address);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });