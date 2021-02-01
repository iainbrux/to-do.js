import submit from "./submit";
import importFromLocalStorage from './importFromLS';
import checkboxStatus from './checkboxStatusLS';
import removeNode from './buttonsConfig';
import addProjectToDOM from "./renderProject";

function render() {
    addToTasks();
    deleteFromTasks();
    clearTaskInput();
    editTask();
    newTaskButton();
    exitButton();
    checkboxStatus();
    addNewProject();

    if (localStorage.length > 0) {
        importFromLocalStorage();
    }

}

let taskName = document.querySelector('#task');
let taskDate = document.querySelector('#due-date');

function deleteFromTasks() {

    let tasksHTML = document.querySelectorAll('.task');

    tasksHTML.forEach(node => {

        let thisTask = node.querySelector('.description').innerText;
        let deleteBtn = node.querySelector('.delete');

        deleteBtn.addEventListener('click', () => {
            localStorage.removeItem(thisTask);
            node.remove();
        });

    });

}

function editTask() {

    let tasksHTML = document.querySelectorAll('.task');

    tasksHTML.forEach(node => {

        let thisTask = node.querySelector('.description').innerText;
        let thisDate = node.querySelector('.due').innerText;
        let editBtn = node.querySelector('.edit');

        editBtn.addEventListener('click', () => removeNode(node, thisTask, thisDate));

    });

}

function addToTasks() {

    let submitButton = document.querySelector('.submit');

    submitButton.addEventListener('click', () => {
        (taskName.value === "" || taskDate.value === "") ? alert('Please complete all input fields.'): submit();
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

    let newTaskBtn = document.querySelector('.new-task-btn');
    let newToDo = document.querySelector('.to-do-add');
    let exit = document.querySelector('.exit');

    exit.addEventListener('click', () => {
        newToDo.style.display = "none";
        newTaskBtn.style.display = "flex"
    });

}

function addNewProject() {

    let addNewProjectDiv = document.querySelector('.new-project');

    let addNewBtn = document.querySelector('.add-new');
    addNewBtn.addEventListener('click', () => {
        addNewProjectDiv.style.display = "flex";
        addNewBtn.style.display = "none";
    });

    let projectSubmitBtn = document.querySelector('.project-submit');
    projectSubmitBtn.addEventListener('click', () => addProjectToDOM());

    let projectExitBtn = document.querySelector('.project-exit');
    projectExitBtn.addEventListener('click', () => {
        addNewProjectDiv.style.display = "none";
        addNewBtn.style.display = "flex";
    });

}

export {
    render
}