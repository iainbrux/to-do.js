import importFromLocalStorage, {
    importWithoutAppendingProjects
} from "./importFromLS";

export default function editNode(node, task, date) {

    let taskName = document.querySelector('#task');
    let taskDate = document.querySelector('#due-date');
    let toDoAdd = document.querySelector('.to-do-add');

    node.remove();
    toDoAdd.style.display = "flex";
    taskName.value = task;
    taskDate.value = date;

}

function updateStatus() {

    const thisProject = document.querySelector('.project-title').innerText;
    let tasksHTML = document.querySelectorAll('.task');

    tasksHTML.forEach(node => {

        const thisTask = node.querySelector('.description').innerText;
        const checkbox = node.querySelector('#status');
        let isChecked = checkbox.checked;

        let retrieved = JSON.parse(localStorage.getItem(thisProject));
        retrieved.forEach(task => {
            for (let key in task) {
                if (key === thisTask) {
                    task[key].status = isChecked;
                }
            }
        })
        retrieved = JSON.stringify(retrieved);
        localStorage.setItem(thisProject, retrieved);

    })

}

function deleteTask(task) {

    const thisProject = document.querySelector('.project-title').innerText;
    let thisTask = task.querySelector('.description').innerText;

    let retrieved = JSON.parse(localStorage.getItem(thisProject));
    retrieved.forEach(task => {
        for (let key in task) {
            if (key === thisTask) {
                let index = retrieved.findIndex(t => t === task);
                retrieved.splice(index, 1);
            }
        }
    })

    task.remove();
    retrieved = JSON.stringify(retrieved);
    localStorage.setItem(thisProject, retrieved)

};

function renderTasksForProject() {

    let tasksContainer = document.querySelector('.tasks-container');
    let newToDo = document.querySelector('.to-do-add');

    tasksContainer.innerHTML = "";
    newToDo.style.display = "flex";

    importFromLocalStorage();

}

function deleteProject() {

    let tasksContainer = document.querySelector('.tasks-container');
    let thisProject = document.querySelector('.project-title');
    let projectName = thisProject.innerText;
    let sidebarProject = document.querySelector(`#${projectName}`);

    sidebarProject.remove();
    tasksContainer.innerHTML = "";
    thisProject.innerHTML = "";

    localStorage.removeItem(projectName);

}

export {
    updateStatus,
    renderTasksForProject,
    deleteProject,
    deleteTask
}