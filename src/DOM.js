import Project from "./projects";

let projects = [];

export function render() {
    let button = document.querySelector('.add-new');
    button.addEventListener('click', () => displayModal())

    let x = document.querySelector('.x');
    x.addEventListener('click', () => exitModal())

    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', () => submit());
}

function exitModal() {
    let modal = document.querySelector('.bg-modal');
    modal.style.display = "none"
}

function displayModal() {
    let modal = document.querySelector('.bg-modal');
    modal.style.display = "flex";
}

function submit() {

    const newProject = new Project();

    let name = document.querySelector('#name').value;
    let desc = document.querySelector('#desc').value;
    let due = document.querySelector('#due').value;
    let status = document.querySelector('#status').value;

    newProject.projectName = name;
    newProject.projectDesc = desc;
    newProject.projectDate = due;
    newProject.projectStatus = status;

    projects.push(newProject);

    (function addProjectToDOM() {

        let list = document.querySelector('.list');

        let projectDiv = document.createElement('div')
        let titleDiv = document.createElement('div')
        let descriptionDiv = document.createElement('div')
        let dueDiv = document.createElement('div')
        let statusDiv = document.createElement('div')

        projectDiv.classList.add('project');
        titleDiv.classList.add('title');
        descriptionDiv.classList.add('description');
        dueDiv.classList.add('due');
        statusDiv.classList.add('status');

        titleDiv.innerText = newProject.name;
        descriptionDiv.innerText = newProject.desc;
        dueDiv.innerText = newProject.due;
        statusDiv.innerText = newProject.status;

        projectDiv.append(titleDiv, descriptionDiv, dueDiv, statusDiv);

        list.append(projectDiv);

    })();

    console.log(projects);
}

export {
    projects
}