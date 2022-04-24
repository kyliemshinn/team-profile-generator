const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./src/generateHTML.js");
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const employee = require('./lib/employee');

//when new team members are added, push to array
const teamMembersarr= [];

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

function initQuestionsChoice() {
        inquirer
        .prompt(initialQuestion).then((response) => {
            if(response.choices == "An Engineer") {
              engineerInfo();
            } else if (answers.choices == "An Intern") {
              internInfo();
            } else {
              writeFile();
            }
        })
}


//file system to get it to send to the generate html file

function writeFile() {
    dataInput = generateHTML(teamMembersarr)
	fs.writeFile('./dist/index.html', dataInput, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Your team member profile has been generated!');
		}
	});
};

//to generate each section questions above- reference readme generator for format
function managersInfo() {

    inquirer.prompt(managerSection)
    .then((response) => {
        response = new Manager(response.name, response.id, response.email, response.number)
        teamMembersarr.push(response);
        return initQuestionsChoice();
    })
    
};

function engineerInfo() {

    inquirer.prompt(engineerSection)
    .then((response) => {
        response = new Engineers(response.name, response.id, response.email, response.github)
        teamMembersarr.push(response);
        return initQuestionsChoice();
    })
    
};

function internInfo() {

    inquirer.prompt(internSection)
    .then((response) => {
        response = new Intern(response.name, response.id, response.email, response.github)
        teamMembersarr.push(response);
        return initQuestionsChoice();
    })
    
};

managersInfo();