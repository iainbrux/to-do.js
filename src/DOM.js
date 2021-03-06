import submit from "./submit";
import { importWithoutAppendingProjects } from './import'
import removeNode, { deleteTask, deleteProject, exitNode, updateStatus, selectLocalStorage, selectCloudStorage } from './buttonsConfig';
import addProjectToDOM, { addProjectToDOMFirebase } from "./renderProject";
import tidyLocalStorage from './tidyLocalStorage';

//Booleans for user input of storage selection

let cloud = false;
let local = true;

storageSelection();

function render() {
    clearTaskInput();
    editTask();
    newTaskButton();
    checkboxStatus();
    addNewProject();
    deleteFromTasks();
    deleteFromProjects();
    tidyLocalStorage();
    exitButton();
    renderList();
    addToTasks();
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
        (taskName.value === "" || taskDate.value === "") ? alert('Please complete all input fields.') : submit(); //Is recognising filled fields as empty
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
    let projectName = document.querySelector('#project');

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
        cloud ? addProjectToDOMFirebase(projectName.value) :
        local ? addProjectToDOM() :
        alert('Please enter a project name');
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

function storageSelection() {
    const localButton = document.querySelector('.localstorage');
    const cloudButton = document.querySelector('.firebase');
    localButton.addEventListener('click', () => {
        localButton.classList.add('disabledbtn');
        cloudButton.classList.remove('disabledbtn');
        selectLocalStorage();
    });
    cloudButton.addEventListener('click', () => {
        localButton.classList.remove('disabledbtn');
        cloudButton.classList.add('disabledbtn');
        selectCloudStorage();
    });
}

export {
    render,
    addNewProject,
    cloud,
    local
}