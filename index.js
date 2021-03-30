const inquirer = require('inquirer');
var validator = require("email-validator");
const fs = require('fs');

const getTeam = () => {
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
        // validate: function (value) {
        //     if (isNaN(value) || value==""){
        //         return 'Please enter a number';
        //     }
        //         return true;
        // },
    },
    {
        type: 'input',
        name: 'uEmail',
        message: 'What is the employee\'s email?',
        validate: function (value) {
          var pass = (validator.validate(value))
          if (pass) {
            return true;
          }
            return 'Please enter an email';
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
    if (!data.uId) {
      console.log("Please enter a number");
      getTeam(1);
    } else {
      console.log(isNaN(data.uId));}
  });
};

getTeam();