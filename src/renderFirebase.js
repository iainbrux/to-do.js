import { addTaskToDOMFromFirebase } from "./renderTask";

function renderFirebase(project) {
    let title = project.innerText;
    document.querySelector('.project-title').innerText = title;
    let container = document.querySelector('.tasks-container');
    container.innerHTML = "";

    db.collection('projects').doc(title).collection('tasks').get().then(snapshot => {
        snapshot.forEach(task => {
            let data = task.data();
            addTaskToDOMFromFirebase(data.task, data.due, data.status);
        })
    })
};

export {
    renderFirebase
}