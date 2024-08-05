fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate the skills list
    const skillsList = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.classList.add('skill');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });

    // Populate the projects list
    const projectsList = document.getElementById('projects-list');
    data.projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project');

      const projectTitle = document.createElement('h4');
      projectTitle.textContent = project.title;
      projectItem.appendChild(projectTitle);

      const projectImage = document.createElement('img');
      projectImage.src = project.image;
      projectItem.appendChild(projectImage);

      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;
      projectItem.appendChild(projectDescription);

      const projectLink = document.createElement('a');
      projectLink.href = project.url;
      projectLink.textContent = project.url;
      projectItem.appendChild(projectLink);

      if (project.loginDetails) {
        const loginDetails = document.createElement('p');
        loginDetails.textContent = `Username: ${project.loginDetails.username}, Password: ${project.loginDetails.password}`;
        projectItem.appendChild(loginDetails);
      }

      const projectTechnologies = document.createElement('p');
      projectTechnologies.textContent = `Technologies: ${project.technologies.join(', ')}`;
      projectItem.appendChild(projectTechnologies);

      projectsList.appendChild(projectItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


  document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      if (sidebar.classList.contains('open')) {
        toggler.querySelector('.navbar-toggler-icon').classList.remove('menu-icon');
        toggler.querySelector('.navbar-toggler-icon').classList.add('close-icon');
      } else {
        toggler.querySelector('.navbar-toggler-icon').classList.remove('close-icon');
        toggler.querySelector('.navbar-toggler-icon').classList.add('menu-icon');
      }
    });
  });

