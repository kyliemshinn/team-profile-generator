function showManagerCard(manager) {
  return `<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${manager.getName()}</h5>
      <p class="card-text">ID: ${manager.getId()}</p>
      <p class="card-text">ID: ${manager.getOfficeNumber()}</p>
      <a href="${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
    </div>
  </div> -->`;
}

// function showEmployeeCard(employee) {
//   return `<!-- <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">Manager: ${employee.getName()}</h5>
//       <p class="card-text">ID: ${employee.getID()}</p>
//       <a href="${employee.getEmail()}" class="card-link">${employee.getEmail()}</a>
//     </div>
//   </div> -->`;
// }

function showEngineerCard(engineer) {
  return `<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${engineer.getName()}</h5>
      <p class="card-text">ID: ${engineer.getId()}</p>
      <a href="${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a>
      <a href="${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
    </div>
  </div> -->`;
}

function showInternCard(intern) {
  return `<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${intern.getName()}</h5>
      <p class="card-text">ID: ${intern.getId()}</p>
      <a href="${intern.getGithub()}" class="card-link">${intern.getGithub()}</a>
      <a href="${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
    </div>
  </div> -->`;
}

function mainHTML(data) {
  const htmlArr = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const teamMember = employee.getRole();
    //generate manager card if manager is defined
    if (teamMember === "Manager") {
      const managerCard = showManagerCard(employee);
      
      htmlArr.push(managerCard);
    }
    //generate engineer card if engineer is defined
    if (teamMember === "Engineer") {
      const engineerCard = showEngineerCard(employee);
      
      htmlArr.push(engineerCard);
    }
    //generate intern card intern is define
    if (teamMember === "Intern") {
      const internCard = showInternCard(employee);
    }

    htmlArr.push(internCard);
  }
  // joining all team members together from above
  const teamMembers = htmlArr.join("");

  //return the info to generate html function to append
  const generateHtmlMembers = generateHtml(teamMembers);
  return generateHtmlMembers;
}

function generateHtml(teamMembers) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Member Generator</title>

</head>
<body>
    <header>
        <h1>My Team Members</h1>
    </header>
    
    <main>
    <div class="container">
    <div class="row" id="teamMemberCards">
        ${teamMembers}
    </div>
    </div>
    </main>
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>`
};

module.exports = mainHTML; 
