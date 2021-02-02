import Task from "./Task";
import addTaskToDOM from './renderTask';

//This function extends to DOM.js but due to the size was seperated into it's own file

let appData = {};
let projectName = document.querySelector('.project-title');
window[`${projectName.innerText}Array`] = [];

export default function submit() {

    let temp = document.querySelector('.project-title').innerText;
    let retrievedJSON = JSON.parse(localStorage.getItem(temp));
    console.log(retrievedJSON)

    const newTask = new Task();

    let name = document.querySelector('#task');
    let due = document.querySelector('#due-date');

    newTask[name.value] = {
        due: due.value,
        status: null
    };

    appData[projectName.innerText] = null;

    //I'll be honest, this piece of code took me almost 20 hours to figure, it's janky AF but it does what I need it to do exactly how I need it to do it. DO NOT TOUCH IT!

    for (let key in appData) {
        if (key == projectName.innerText) {
            console.log('Success');
            if (window[`${key}Array`] == undefined) {
                let key = projectName.innerText;
                window[`${key}Array`] = [];
            }
            window[`${key}Array`].push(newTask);
            console.log(window[`${key}Array`]);
            addTaskToDOM(newTask);
            return addToLocalStorage();
        }
    }

    function addToLocalStorage() {
        appData[projectName.innerText] = window[`${projectName.innerText}Array`];

        let objectJSON = JSON.stringify(appData[projectName.innerText]);
        localStorage.setItem(projectName.innerText, objectJSON);

        name.value = "";
        due.value = "";
    }

}