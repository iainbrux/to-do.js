export default function addProjectToDOM(key) {

    let newProject = document.querySelector('.new-project')
    let addNewBtn = document.querySelector('.add-new');
    let projectName = document.querySelector('#project');
    let projects = document.querySelector('.projects');

    let projectDiv = document.createElement('div');

    if (key === undefined) {
        key = projectName.value;
    }

    let regex = /\s/gi;
    let regexQuery = key;
    let className = regexQuery.replace(regex, '-');


    projectDiv.classList.add('title');
    projectDiv.id = className;
    projectDiv.innerText = key;
    projects.append(projectDiv);
    newProject.style.display = "none";

    projectName.value = "";
    addNewBtn.style.display = "flex";

}