import editNode, { deleteTask, updateStatus } from './buttonsConfig';

export default function addTaskToDOM(task) {

    let container = document.querySelector('.tasks-container');
    // container.innerHTML = "";

    let taskDiv = document.createElement('div');
    let descDiv = document.createElement('div');
    let dueDiv = document.createElement('div');
    let btnsDiv = document.createElement('div');
    let deleteBtn = document.createElement('div');
    let editBtn = document.createElement('div');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.name = "status";
    checkbox.id = "status";
    checkbox.addEventListener('click', () => updateStatus());

    taskDiv.classList.add('task');
    descDiv.classList.add('description');
    dueDiv.classList.add('due');
    btnsDiv.classList.add('btns');

    let innerData = null;

    for (let key in task) {
        descDiv.innerText = key;
        innerData = task[key];
    }

    dueDiv.innerText = innerData.due;
    checkbox.checked = innerData.status;

    deleteBtn.classList.add('delete'); 
    deleteBtn.innerText = "Delete"; 
    deleteBtn.addEventListener('click', () => deleteTask(taskDiv)); 

    editBtn.classList.add('edit'); 
    editBtn.innerText = "Edit"; 
    editBtn.addEventListener('click', () => { editNode(taskDiv, descDiv.innerText, dueDiv.innerText) }); 

    btnsDiv.append(editBtn, deleteBtn); 

    taskDiv.append(checkbox, descDiv, dueDiv, btnsDiv); 
    container.append(taskDiv); 

};

function addTaskToDOMFromFirebase(task, due, status) {

    let container = document.querySelector('.tasks-container');

    let taskDiv = document.createElement('div');
    let descDiv = document.createElement('div');
    let dueDiv = document.createElement('div');
    let btnsDiv = document.createElement('div');
    let deleteBtn = document.createElement('div');
    let editBtn = document.createElement('div');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.name = "status";
    checkbox.id = "status";
    checkbox.addEventListener('click', () => updateStatus());

    taskDiv.classList.add('task');
    descDiv.classList.add('description');
    dueDiv.classList.add('due');
    btnsDiv.classList.add('btns');

    descDiv.innerText = task;
    dueDiv.innerText = due;
    checkbox.checked = status;

    deleteBtn.classList.add('delete'); 
    deleteBtn.innerText = "Delete"; 
    deleteBtn.addEventListener('click', () => deleteTask(taskDiv)); 

    editBtn.classList.add('edit'); 
    editBtn.innerText = "Edit";  
    editBtn.addEventListener('click', () => { editNode(taskDiv, descDiv.innerText, dueDiv.innerText) });

    btnsDiv.append(editBtn, deleteBtn);

    taskDiv.append(checkbox, descDiv, dueDiv, btnsDiv);
    container.append(taskDiv); 

};

export {
    addTaskToDOMFromFirebase
}