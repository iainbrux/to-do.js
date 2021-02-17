import submit from "./submit";
import importFromLocalStorage, { importFromFirebase, importWithoutAppendingProjects } from './import'
import removeNode, { deleteTask, deleteProject, exitNode, updateStatus } from './buttonsConfig';
import addProjectToDOM from "./renderProject";
import tidyLocalStorage from './tidyLocalStorage';

//Booleans for user input of storage selection

let cloud = false;
let local = true;

function render() {
    addToTasks();
    clearTaskInput();
    editTask();
    newTaskButton();
    checkboxStatus();
    addNewProject();
    deleteFromTasks();
    deleteFromProjects();
    tidyLocalStorage();
    exitButton();

    if (localStorage.length > 0) {
        importFromLocalStorage();
    }
    renderList();
    importFromFirebase(); //For testing ONLY (will be decided upon boolean)

}

let taskName = document.querySelector('#task');
let taskDate = document.querySelector('#due-date');

function deleteFromProjects() {
    let deleteProjectButton = document.querySelectorAll('.delete-project-btn');
    deleteProjectButton.forEach(btn => btn.addEventListener('click', () => deleteProject()))
}

function deleteFromTasks() {
    let deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(btn => btn.addEventListener('click', () => deleteTask()))
}

function editTask() {
    let tasksHTML = document.querySelectorAll('.task');
    tasksHTML.forEach(node => {
        let thisTask = node.querySelector('.description').innerText;
        let thisDate = node.querySelector('.due').innerText;
        let editBtn = node.querySelector('.edit');
        editBtn.addEventListener('click', () => { removeNode(node, thisTask, thisDate); deleteTask(thisTask) });
    });
}

function addToTasks() {
    let submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', () => {
        (taskName.value === "" || taskDate.value === "") ? alert('Please complete all input fields.') : submit();
    });
}

function clearTaskInput() {
    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        taskName.value = "";
        taskDate.value = "";
    })
}

function newTaskButton() {
    let newToDo = document.querySelector('.to-do-add');
    let newTask = document.querySelector('.new-task-btn');
    newTask.addEventListener('click', () => {
        newToDo.style.display = "flex";
        newTask.style.display = "none"
    });
}

function exitButton() {
    let exit = document.querySelector('.exit');
    exit.addEventListener('click', () => exitNode());
}

function checkboxStatus() {
    let checkboxes = document.querySelectorAll('#status');
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', () => updateStatus()));
}

function addNewProject() {

    let addNewProjectDiv = document.querySelector('.new-project');

    let addNewBtn = document.querySelector('.add-new');
    addNewBtn.addEventListener('click', () => {
        addNewProjectDiv.style.display = "flex";
        addNewBtn.style.display = "none";
    });

    let projectExitBtn = document.querySelector('.project-exit');
    projectExitBtn.addEventListener('click', () => {
        addNewProjectDiv.style.display = "none";
        addNewBtn.style.display = "flex";
    });

    let projectSubmitBtn = document.querySelector('.project-submit');
    projectSubmitBtn.addEventListener('click', () => {
        addProjectToDOM();
        renderList();
    });

}

function renderList() {
    let projectsList = document.querySelector('.projects');
    let titles = projectsList.querySelectorAll('.title');
    titles.forEach(title => {
        title.addEventListener('click', () => {
            importWithoutAppendingProjects(title);
            deleteFromTasks();
        });
    })
}

export {
    render,
    addNewProject
}