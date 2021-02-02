export default function addProjectToDOM() {

    let newProject = document.querySelector('.new-project')
    let addNewBtn = document.querySelector('.add-new');
    let projectName = document.querySelector('#project');
    let projects = document.querySelector('.projects');

    let projectDiv = document.createElement('div');

    let regex = /\s/gi;
    let regexQuery = projectName.value;
    let className = regexQuery.replace(regex, '-');


    projectDiv.classList.add('title');
    projectDiv.id = className;
    projectDiv.innerText = projectName.value;
    projects.append(projectDiv);
    newProject.style.display = "none";

    projectName.value = "";
    addNewBtn.style.display = "flex";

}