export default function editNode(node, task, date) {

    let taskName = document.querySelector('#task');
    let taskDate = document.querySelector('#due-date');
    let toDoAdd = document.querySelector('.to-do-add');

    node.remove();
    toDoAdd.style.display = "flex";
    taskName.value = task;
    taskDate.value = date;

}

export function updateStatus(checkbox) {

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