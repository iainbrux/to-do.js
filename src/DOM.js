import submit from "./submit";


function render() {
    addToTasks();
    deleteFromTasks();
    clearTaskInput();
    editTask();
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

function addToTasks() { // For function info see submit.js

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

export {
    render,
    editTask
}