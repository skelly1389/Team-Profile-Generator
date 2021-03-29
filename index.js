const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'uName',
      message: 'What is the employee\'s name?',
      validate: function (value) {
        var pass = (value !== null && value !== "")
        if (pass) {
          return true;
        }
          return 'Please enter a name';
      },
    },
    {
        type: 'input',
        name: 'uId',
        message: 'What is the employee\'s ID number?',
        validate: function (value) {
            if (isNaN(value) || value==""){
                return 'Please enter a number';
            }
                return true;
        },
    },
    {
        type: 'input',
        name: 'uEmail',
        message: 'What is the employee\'s email?',
        validate: function (value) {
          var pass = (value !== null && value !== "" && value.includes('@'))
          if (pass) {
            return true;
          }
            return 'Please enter an email';
        },
      },
      {
        type: 'input',
        name: 'uId',
        message: 'What is the employee\'s ID number?',
        validate: function (value) {
            if (isNaN(value) || value==""){
                return 'Please enter a number';
            }
                return true;
        },
    },
    {
        type: 'list',
        message: 'Would you like to add team members?',
        name: 'uNewEmp',
        choices: ['Engineer', 'Intern'],
      },
  ])
  .then((data) => {
    console.log(data.uEmail)
    // fs.writeFile('SAMPLE.md', template.structure(data), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  });
