function showManagerCard(manager) {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${manager.getName()}</h5>
      <p class="card-text">ID: ${manager.getId()}</p>
      <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
      <a href="${manager.getEmail()}" class="card-link">Email: ${manager.getEmail()}</a>
    </div>
  </div>`;
}

function showEngineerCard(engineer) {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer: ${engineer.getName()}</h5>
      <p class="card-text">ID: ${engineer.getId()}</p>
      <a href="${engineer.getGithub()}" class="card-link">Github: ${engineer.getGithub()}</a>
      <a href="${engineer.getEmail()}" class="card-link">Email: ${engineer.getEmail()}</a>
    </div>
  </div>`;
}

function showInternCard(intern) {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern: ${intern.getName()}</h5>
      <p class="card-text">ID: ${intern.getId()}</p>
      <a href="${intern.getGithub()}" class="card-link">Github: ${intern.getGithub()}</a>
      <a href="${intern.getEmail()}" class="card-link">Email: ${intern.getEmail()}</a>
    </div>
  </div>`;
}

function mainHTML(data) {
  //create string for information to filter through and then append to html
  let htmlStr = ''

  for ( i = 0; i < data.length; i++ ) {
    if (data[i].getRole() === 'Manager'){
      htmlStr = htmlStr + showManagerCard(data[i])
    }
    if (data[i].getRole() === 'Engineer'){
      htmlStr = htmlStr + showEngineerCard(data[i])
    }
    if (data[i].getRole() === 'Intern'){
      htmlStr = htmlStr + showInternCard(data[i])
    }
  } return htmlStr
}


function htmlLayout(data) {
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
        <div class="row justify-content-center" id="team-cards">
          ${mainHTML(data)}
        </div>
      </div>
    </main>
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>`
};

module.exports = htmlLayout; 
