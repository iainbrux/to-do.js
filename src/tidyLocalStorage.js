export default function tidyLocalStorage() {
    let objectKeys = Object.keys(localStorage);
    let projects = [];
    let noTasks = 0;
    
    objectKeys.forEach(key => projects.push(JSON.parse(localStorage.getItem(key))));

    localStorage.clear();

    projects.forEach(project => {
        
        let keysIndex = projects.findIndex(p => p === project);
        let title = objectKeys[keysIndex];
        
        if (project.length === noTasks) {
            let index = projects.findIndex(p => p.length === noTasks);
            projects.splice(index, 1);
        }

        const stringifyProject = JSON.stringify(project)
        
        localStorage.setItem(title, stringifyProject)  

    })

}