import { render } from './DOM';
import addTaskToDOM from './renderTask';

export default function importFromLocalStorage() {

    let title = document.querySelector('.project-title').innerText;

    let importedData = JSON.parse(localStorage.getItem(title));
    console.log('Imported Data:')
    console.log(importedData)

    let projectNames = Object.keys(localStorage);
    let projects = [];

    projectNames.forEach(key => {
        if (key == title) {
            projects.push(JSON.parse(localStorage.getItem(key)))
        }
    })

    projects.forEach(arr => {
        arr.forEach(task => addTaskToDOM(task))
    });

}