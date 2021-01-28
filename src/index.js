import Task from './tasks.js'
import Project from './projects.js'
import { render, projects } from './DOM'

render();

let tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    let deleteBtn = task.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        task.innerHTML = "";
    })
})

