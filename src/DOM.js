import submit from "./submit";


function render() {
    addToTasks();
    deleteFromTasks()
}

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

function addToTasks() { // For function info see submit.js

    let newTaskButton = document.querySelector('.submit');
    newTaskButton.addEventListener('click', () => submit());

}

export {
    render
}