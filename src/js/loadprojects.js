import projects from './projects.js';

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const project = projects[projectId];

console.log(projectId);

if (project) {
    // Update the page content
    document.querySelector('#projectTitle').textContent = project.name;
    document.querySelector('.tagline').textContent = project.tagline;
    document.querySelector('#detailedDescription').textContent = project.description;

    const techStack = document.querySelector('.tech-stack');
    techStack.innerHTML = project.tech.map(tech => 
        `<span class="tech">${tech}</span>`
    ).join('');

    document.querySelector('.featuresList').innerHTML = project.features.map(feature => 
        `<li><strong>${feature.name}</strong> ${feature.description}</li>`
    ).join('');

    document.querySelector('.gallery-grid').innerHTML = project.pictures.map(picture =>
        `<img src="${picture.src}" alt="${picture.alt}">`
    );

    document.querySelector('#githubView').href = project.github;
    document.querySelector('#liveView').href = project.live;
} else {
    document.body.innerHTML = '<h1>Project not found.</h1><a href="index.html">Go Back</a>';
}