import submit from "./submit";
import importFromLocalStorage from './importFromLocalStorage';
import checkboxStatus from './checkboxStatusLS';


function render() {
    addToTasks();
    deleteFromTasks();
    clearTaskInput();
    editTask();
    newTaskButton();
    exitButton();
    checkboxStatus();

    if (localStorage.length > 0) {
        importFromLocalStorage();
    }

}

let taskName = document.querySelector('#task');
let taskDate = document.querySelector('#due-date');

export default function deleteFromTasks() {
    
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

        editBtn.addEventListener('click', () => {
            node.remove();
            taskName.value = thisTask;
            taskDate.value = thisDate;
        });

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

    newTask.addEventListener('click', () => newToDo.style.display = "flex");

}

function exitButton() {

    let newToDo = document.querySelector('.to-do-add');
    let exit = document.querySelector('.exit');
    
    exit.addEventListener('click', () => newToDo.style.display = "none");

}

export {
    render,
    editTask
}