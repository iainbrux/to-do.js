import submit from "./submit";

export function render() {
    addToTasks();
    deleteFromTasks();
}

function deleteFromTasks() {

    let tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        let deleteBtn = task.querySelector('.delete');
        deleteBtn.addEventListener('click', () => task.remove());
    });

}

function addToTasks() { // For function info see submit.js

    let newTaskButton = document.querySelector('.submit');
    newTaskButton.addEventListener('click', () => submit());

}