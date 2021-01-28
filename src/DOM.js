import Task from "./projects";

let tasks = [];

export function render() {
    let newTaskButton = document.querySelector('.submit');
    newTaskButton.addEventListener('click', () => submit())

    deleteFromTasks();
}

function submit() {

    const newTask = new Task();

    let name = document.querySelector('#task').value;
    let due = document.querySelector('#due-date').value;

    newTask.projectName = name;
    newTask.projectDate = due;

    projects.push(newProject);

    // (function addProjectToDOM() {

    //     let list = document.querySelector('.list');

    //     let projectDiv = document.createElement('div')
    //     let titleDiv = document.createElement('div')
    //     let descriptionDiv = document.createElement('div')
    //     let dueDiv = document.createElement('div')
    //     let statusDiv = document.createElement('div')

    //     projectDiv.classList.add('project');


    //     titleDiv.classList.add('title');
    //     descriptionDiv.classList.add('description');
    //     dueDiv.classList.add('due');
    //     statusDiv.classList.add('status');

    //     titleDiv.innerText = newProject.name;
    //     descriptionDiv.innerText = newProject.desc;
    //     dueDiv.innerText = newProject.due;
    //     statusDiv.innerText = newProject.status;

    //     projectDiv.append(titleDiv, descriptionDiv, dueDiv, statusDiv);

    //     list.append(projectDiv);

    // })();

    newTask.checkStatus();

    console.log(tasks);
}

function deleteFromTasks() {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        let deleteBtn = task.querySelector('.delete');
        deleteBtn.addEventListener('click', () => task.remove());
    });
}

export {
    projects
}