import submit from "./submit";
import deleteFromLocalStorage from './deleteFromLS';

export function render() {
    addToTasks();
    deleteFromTasks()
}

export function deleteFromTasks() {

    let tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        let deleteBtn = task.querySelector('.delete');
        deleteBtn.addEventListener('click', () => {
            // deleteFromLocalStorage(0);
            task.remove();
        });
    });

}

function addToTasks() { // For function info see submit.js

    let newTaskButton = document.querySelector('.submit');
    newTaskButton.addEventListener('click', () => submit());

}