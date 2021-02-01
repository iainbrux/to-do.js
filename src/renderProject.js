export default function addProjectToDOM() {

    let newProject = document.querySelector('.new-project')
    let addNewBtn = document.querySelector('.add-new');
    let projectName = document.querySelector('#project');
    let projects = document.querySelector('.projects');

    let projectDiv = document.createElement('div');

    projectDiv.classList.add('title');
    projectDiv.innerText = projectName.value;
    projects.append(projectDiv);
    newProject.style.display = "none";

    projectName.value = "";
    addNewBtn.style.display = "flex";

}