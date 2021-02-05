import importFromLocalStorage from "./importFromLS";

export default function editNode(node, task, date) {

    let taskName = document.querySelector('#task');
    let taskDate = document.querySelector('#due-date');
    let toDoAdd = document.querySelector('.to-do-add');

    node.remove();
    toDoAdd.style.display = "flex";
    taskName.value = task;
    taskDate.value = date;

}

function updateStatus(checkbox) {

    const thisProject = document.querySelector('.project-title').innerText;
    let tasksHTML = document.querySelectorAll('.task');

    tasksHTML.forEach(node => {

        const thisTask = node.querySelector('.description').innerText;
        const thisDate = node.querySelector('.due').innerText;
        const checkbox = node.querySelector('#status');

        checkbox.addEventListener('click', () => {

            
        })
    })

    let taskNames = Object.keys(localStorage);
    let tasks = [];

    taskNames.forEach(task => {
        tasks.push(JSON.parse(localStorage.getItem(task)));
    })

    tasks.forEach(task => {

        let query = task.name;
        let thisTask = tasks.find(object => object.name === query);
        let isChecked = checkbox.checked;

        thisTask.status = isChecked;

        let taskJSON = JSON.stringify(task);
        localStorage.setItem(query, taskJSON);

    })

}

function renderTasksForProject() {

    let tasksContainer = document.querySelector('.tasks-container');
    let newToDo = document.querySelector('.to-do-add');

    tasksContainer.innerHTML = "";
    newToDo.style.display = "flex";

    importFromLocalStorage();

}

export {
    updateStatus,
    renderTasksForProject
}