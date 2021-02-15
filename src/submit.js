import Task from "./Task";
import addTaskToDOM from './renderTask';

let appData = {};
let projectName = document.querySelector('.project-title');
window[`${projectName.innerText}Array`] = []; //Creates a dynamically named variable that is an empty array.

export default function submit() { //This function extends into buttonsConfig.js

    let temp = document.querySelector('.project-title').innerText;
    let retrievedJSON = JSON.parse(localStorage.getItem(temp));

    const newTask = new Task();

    let name = document.querySelector('#task');
    let due = document.querySelector('#due-date');

    newTask[name.value] = {
        due: due.value,
        status: false
    };

    appData[projectName.innerText] = null;

    //From here onwards, leave this alone.

    for (let key in appData) {
        if (key == projectName.innerText) {
            if (window[`${key}Array`] == undefined) {
                let key = projectName.innerText;
                window[`${key}Array`] = [];
            }
            if (retrievedJSON == null) {
                retrievedJSON = [];
            }
            retrievedJSON.push(newTask);
            addTaskToDOM(newTask);
            return addToLocalStorage();
        }
    }

    function addToLocalStorage() {
        appData[projectName.innerText] = window[`${projectName.innerText}Array`];

        let objectJSON = JSON.stringify(retrievedJSON);
        localStorage.setItem(projectName.innerText, objectJSON);

        name.value = "";
        due.value = "";
    }

}