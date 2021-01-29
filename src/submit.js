import Task from "./Task";
import {default as addToLocalStorage} from './addToLS';
import deleteFromTasks from './DOM';

//This function extends to DOM.js but due to the size was seperated into it's own file

let tasks = [];

export default function submit() {

    const newTask = new Task();

    let name = document.querySelector('#task').value;
    let due = document.querySelector('#due-date').value;

    newTask.taskName = name;
    newTask.taskDate = due;

    tasks.push(newTask);

    (function addTaskToDOM() {

        let container = document.querySelector('.tasks-container');

        let taskDiv = document.createElement('div');
        let descDiv = document.createElement('div');
        let dueDiv = document.createElement('div');
        let btnsDiv = document.createElement('div');
        let deleteBtn = document.createElement('div');
        let editBtn = document.createElement('div');
        let checkbox = document.createElement('input');

        (function inputTypeCheckbox() {

            checkbox.type = "checkbox";
            checkbox.name = "status";
            checkbox.id = "status";

        })();

        (function addClassNames() {

            taskDiv.classList.add('task');
            descDiv.classList.add('description');
            dueDiv.classList.add('due');
            btnsDiv.classList.add('btns');

        })();

        (function addButtonsToTaskDiv() {

            deleteBtn.classList.add('delete');
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener('click', () => deleteFromTasks());

            editBtn.classList.add('edit');
            editBtn.innerText = "Edit";

            btnsDiv.append(editBtn, deleteBtn);

        })();

        (function addDataToDivs() {

            descDiv.innerText = newTask.taskName;
            dueDiv.innerText = newTask.taskDate;

        })();

        (function appendToContainer() {

            taskDiv.append(checkbox, descDiv, dueDiv, btnsDiv);
            container.append(taskDiv);

        })();

    })();

    newTask.checkStatus();

    addToLocalStorage(newTask);

    console.log(tasks);

}

export { tasks }