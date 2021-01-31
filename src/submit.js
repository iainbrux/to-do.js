import Task from "./Task";
import addTaskToDOM from './renderTask';

//This function extends to DOM.js but due to the size was seperated into it's own file

export default function submit() {

    let tasks = [];

    const newTask = new Task();

    let name = document.querySelector('#task');
    let due = document.querySelector('#due-date');

    newTask.taskName = name.value;
    newTask.taskDate = due.value;
    newTask.status = null;

    tasks.push(newTask);

    addTaskToDOM(newTask);

    newTask.checkStatus();

    let objectJSON = JSON.stringify(newTask);
    localStorage.setItem(name.value, objectJSON);

    name.value = "";
    due.value = "";

}