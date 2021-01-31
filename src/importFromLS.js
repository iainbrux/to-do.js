import addTaskToDOM from './renderTask';

export default function importFromLocalStorage() {

    let taskNames = Object.keys(localStorage);
    let tasks = [];

    taskNames.forEach(task => {
        tasks.push(JSON.parse(localStorage.getItem(task)))
    })

    tasks.forEach(task => {addTaskToDOM(task)})

}