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

    console.log(projects);
}

export { projects }