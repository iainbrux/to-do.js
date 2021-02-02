import editNode, { updateStatus } from './buttonsConfig';

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
        checkbox.addEventListener('click', () => updateStatus(checkbox));

    })();

    (function addClassNames() {

        taskDiv.classList.add('task');
        descDiv.classList.add('description');
        dueDiv.classList.add('due');
        btnsDiv.classList.add('btns');

    })();

    (function addDataToDivs() {

        descDiv.innerText = task.name;
        dueDiv.innerText = task.due;
        checkbox.checked = task.status;

    })();

    (function addButtonsToTaskDiv() {

        deleteBtn.classList.add('delete');
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener('click', () => {

            // localStorage.removeItem(thisProject[descDiv.innerText]);
            taskDiv.remove();
            let test = JSON.parse(localStorage[thisProject])
            console.log('This is test:' + test)
        })

        editBtn.classList.add('edit');
        editBtn.innerText = "Edit";
        editBtn.addEventListener('click', () => editNode(taskDiv, descDiv.innerText, dueDiv.innerText));

        btnsDiv.append(editBtn, deleteBtn);

    })();

    (function appendToContainer() {

        taskDiv.append(checkbox, descDiv, dueDiv, btnsDiv);
        container.append(taskDiv);

    })();

};