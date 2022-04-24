
function showManagerCard(manager) {
    return `<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${manager.getName()}</h5>
      <p class="card-text">ID: ${manager.getID()}</p>
      <p class="card-text">ID: ${manager.getOfficeNumber()}</p>
      <a href="${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
    </div>
  </div> -->`
}

function showEmployeeCard(employee) {
    return `<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${employee.getName()}</h5>
      <p class="card-text">ID: ${employee.getID()}</p>
      <a href="${employee.getEmail()}" class="card-link">${employee.getEmail()}</a>
    </div>
  </div> -->`
}

function showEngineerCard(engineer) {
    return `<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${engineer.getName()}</h5>
      <p class="card-text">ID: ${engineer.getID()}</p>
      <a href="${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a>
      <a href="${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
    </div>
  </div> -->`
}

function showInternCard(intern) {
    return `<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager: ${intern.getName()}</h5>
      <p class="card-text">ID: ${intern.getID()}</p>
      <a href="${intern.getGithub()}" class="card-link">${intern.getGithub()}</a>
      <a href="${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
    </div>
  </div> -->`
}