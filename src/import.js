import addProjectToDOM from './renderProject';
import addTaskToDOM, { addTaskToDOMFromFirebase } from './renderTask';
import { renderFirebase } from './renderFirebase';

export default function importFromLocalStorage() {

    let title = document.querySelector('.project-title');
    let newTaskButton = document.querySelector('.new-task-btn');
    let deleteProjectButton = document.querySelector('.delete-project-btn');

    let objectKeys = Object.keys(localStorage);
    let projects = [];

    let r = Math.floor(Math.random() * objectKeys.length)

    title.innerText = objectKeys[r];
    newTaskButton.style.display = "flex";
    deleteProjectButton.style.display = "flex";

    objectKeys.forEach(key => {
        if (key == title.innerText) {
            projects.push(JSON.parse(localStorage.getItem(key)))
        }
        addProjectToDOM(key);
    })

    projects.forEach(arr => {
        if (arr.length > 0) {
            arr.forEach(task => addTaskToDOM(task))
        }
    });

}

function importWithoutAppendingProjects(project) {

    let tasksContainer = document.querySelector('.tasks-container');
    let newToDo = document.querySelector('.to-do-add');
    let projectTitle = document.querySelector('.project-title');
    let newTaskButton = document.querySelector('.new-task-btn');
    let deleteProjectButton = document.querySelector('.delete-project-btn');

    tasksContainer.innerHTML = "";
    newToDo.style.display = "none";
    projectTitle.innerText = project.innerText;
    newTaskButton.style.display = "flex";
    deleteProjectButton.style.display = "flex";

    let title = document.querySelector('.project-title').innerText;

    let objectKeys = Object.keys(localStorage);
    let projects = [];

    objectKeys.forEach(key => {
        if (key == title) {
            projects.push(JSON.parse(localStorage.getItem(key)))
        }
    })

    projects.forEach(arr => {
        arr.forEach(task => addTaskToDOM(task))
    });

};

function importFromFirebase() {

    let title = document.querySelector('.project-title');
    let newTaskButton = document.querySelector('.new-task-btn');
    let deleteProjectButton = document.querySelector('.delete-project-btn');

    // db.collection('projects').doc(title.innerText).collection('tasks').doc('new task').set({})

    let projectsObject = {
        names: []
    }

    db.collection('projects').doc('project names').get().then(snapshot => {
        snapshot.data().names.forEach(name => projectsObject.names.push(name));
    }).then(() => {
        projectsObject.names.forEach(name => addProjectToDOM(name))
    }).then(() => {
        let r = Math.floor(Math.random() * projectsObject.names.length)
        title.innerText = projectsObject.names[r];
    }).then(() => {
        renderFirebase(title);
    }).then(() => {
        let projects = document.querySelectorAll('.title');
        projects.forEach(project => {
            project.addEventListener('click', () => renderFirebase(project));
        })
    })

}

export {
    importFromFirebase,
    importWithoutAppendingProjects
}