const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");
const generateHtml = require("./src/generatehtml");

//when new team members are added, push to array
const teamMembersarr = [];

//section questions
const managerSection = [
  {
    type: "input",
    message: "What is the managers name? ",
    name: "name",
  },
  {
    type: "input",
    message: "What is the managers employee ID? ",
    name: "ID",
  },
  {
    type: "input",
    message: "What is the managers email? ",
    name: "email",
  },
  {
    type: "input",
    message: "What is the managers office number? ",
    name: "number",
  },
];

const engineerSection = [
  {
    type: "input",
    message: "What is the engineer name? ",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer employee ID? ",
    name: "ID",
  },
  {
    type: "input",
    message: "What is the engineer email? ",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer github? ",
    name: "github",
  },
];

const internSection = [
  {
    type: "input",
    message: "What is the intern name? ",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern employee ID? ",
    name: "ID",
  },
  {
    type: "input",
    message: "What is the intern email? ",
    name: "email",
  },
  {
    type: "input",
    message: "What school does the intern attend? ",
    name: "school",
  },
];

const initialQuestion = [
  {
    type: "list",
    name: "choices",
    message: "Would you like to add: ",
    choices: ["An Engineer", "An Intern", "Done"],
  },
];

function initQuestionsChoice() {
  inquirer.prompt(initialQuestion)
  .then((response) => {
    if (response.choices == "An Engineer") {
      engineerInfo();
    } else if (response.choices == "An Intern") {
      internInfo();
    } else {
      console.log("team members have been generated");
      writeFile("./dist/index.html", generateHtml({ ...response }));
    }
  });
}

//file system to get it to send to the generate html file
function writeFile(fileName, data) {
  //only take in two parameters, will create a new file if one does not exist, join all the segments into one path, and grab the data
  return fs.writeFileSync(fileName, data);
}

//to generate each section questions above- reference readme generator for format
function managersInfo() {
  inquirer.prompt(managerSection)
  .then((response) => {
    const managerResponse = new Manager(
      response.name,
      response.ID,
      response.email,
      response.number
    );
    teamMembersarr.push(managerResponse);
    return initQuestionsChoice();
  });
}

function engineerInfo() {
  inquirer.prompt(engineerSection)
  .then((response) => {
    const engineer = new Engineer(
      response.name,
      response.ID,
      response.email,
      response.github
    );
    teamMembersarr.push(engineer);
    return initQuestionsChoice();
  });
}

function internInfo() {
  inquirer.prompt(internSection)
  .then((response) => {
    const intern = new Intern(
      response.name,
      response.ID,
      response.email,
      response.school
    );
    teamMembersarr.push(intern);
    return initQuestionsChoice();
  });
}

managersInfo();
