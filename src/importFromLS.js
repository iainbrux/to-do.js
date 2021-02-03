import addProjectToDOM from './renderProject';
import addTaskToDOM from './renderTask';

export default function importFromLocalStorage() {

    let title = document.querySelector('.project-title');
    let newTaskButton = document.querySelector('.new-task-btn');

    let objectKeys = Object.keys(localStorage);
    let projects = [];

    let r = Math.floor(Math.random() * objectKeys.length)

    title.innerText = objectKeys[r];
    newTaskButton.style.display = "flex";

    objectKeys.forEach(key => {
        if (key == title.innerText) {
            projects.push(JSON.parse(localStorage.getItem(key)))
        }
        addProjectToDOM(key);
    })

    projects.forEach(arr => {
        arr.forEach(task => addTaskToDOM(task))
    });

}