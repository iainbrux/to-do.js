import { render } from './DOM';
import addTaskToDOM from './renderTask';

export default function importFromLocalStorage() {

    let title = document.querySelector('.project-title').innerText;

    let projectNames = Object.keys(localStorage);
    let projects = [];

    projectNames.forEach(key => projects.push(JSON.parse(localStorage.getItem(key))))

    console.log(projectNames)

    // projects.forEach(project => {
    //     console.log(projects);
    //     // let task = project.pop();
    //     console.log(task);
    //     addTaskToDOM(task);
    // })

    // renderSpecific.forEach(task => addTaskToDOM(task));

}