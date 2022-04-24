const inquirer = require('inquirer');

//section questions
const managerSection = [

    {
        type: 'input',
        message: "What is the managers name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the managers employee ID? ",
        name: 'ID',
    },
    {
        type: 'input',
        message: "What is the managers email? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the managers office number? ",
        name: 'number',
    }
]

// const employeeSection = [
//     {
//         type: 'input',
//         message: "What is the employees name? ",
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: "What is the employees employee ID? ",
//         name: 'ID',
//     },
//     {
//         type: 'input',
//         message: "What is the employees email? ",
//         name: 'email',
//     },
// ]

const engineerSection = [
    {
        type: 'input',
        message: "What is the engineer name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineer employee ID? ",
        name: 'ID',
    },
    {
        type: 'input',
        message: "What is the engineer email? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer github? ",
        name: 'github',
    }
]

const internSection = [
    {
        type: 'input',
        message: "What is the intern name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the intern employee ID? ",
        name: 'ID',
    },
    {
        type: 'input',
        message: "What is the intern email? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What school does the intern attend? ",
        name: 'school',
    }
]

const initialQuestion = [
    {
      type: 'list',
      name: 'choices',
      message: 'Would you like to add: ',
      choices: ['An Engineer', 'An Intern', 'Done'],
    }
  ]


//file system to get it to send to the generate html file


//section to generate each section questions above- reference readme generator for format