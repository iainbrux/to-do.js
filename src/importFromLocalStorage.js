import deleteFromTasks, { editTask } from './DOM'

//Don't forget to add storage for checkbox status

export default function importFromLocalStorage() {

    let taskNames = Object.keys(localStorage); //This creates an array of all the keys from the localStorage object to use in querying the indices in localStorage
    let tasks = [];

    taskNames.forEach(task => {
        tasks.push(JSON.parse(localStorage.getItem(task))) //Queries each key and pushes the parsed object into the tasks array
    })

    tasks.forEach(task => {

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
                editBtn.addEventListener('click', () => editTask());

                btnsDiv.append(editBtn, deleteBtn);

            })();

            (function addDataToDivs() {

                descDiv.innerText = task.name;
                dueDiv.innerText = task.due;

            })();

            (function appendToContainer() {

                taskDiv.append(checkbox, descDiv, dueDiv, btnsDiv);
                container.append(taskDiv);

            })();

        })();

    })

}