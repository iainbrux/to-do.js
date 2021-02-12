import editNode, { deleteTask, updateStatus } from './buttonsConfig';

export default function addTaskToDOM(task) {

    let container = document.querySelector('.tasks-container');
    let thisProject = document.querySelector('.project-title').innerText;

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
        checkbox.addEventListener('click', () => updateStatus());

    })();

    (function addClassNames() {

        taskDiv.classList.add('task');
        descDiv.classList.add('description');
        dueDiv.classList.add('due');
        btnsDiv.classList.add('btns');

    })();

    (function addDataToDivs() {

        let innerData = null;

        for (let key in task) {
            descDiv.innerText = key;
            innerData = task[key];
        }

        console.log(innerData)

        dueDiv.innerText = innerData.due;
        checkbox.checked = innerData.status;

    })();

    (function addButtonsToTaskDiv() {

        deleteBtn.classList.add('delete');
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener('click', () => deleteTask(taskDiv));

        editBtn.classList.add('edit');
        editBtn.innerText = "Edit";
        editBtn.addEventListener('click', () => {editNode(taskDiv, descDiv.innerText, dueDiv.innerText); deleteTask(taskDiv)});

        btnsDiv.append(editBtn, deleteBtn);

    })();

    (function appendToContainer() {

        taskDiv.append(checkbox, descDiv, dueDiv, btnsDiv);
        container.append(taskDiv);

    })();

};