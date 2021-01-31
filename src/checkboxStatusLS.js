export default function checkboxStatus() {

    /* When code is refactored to import from buttonsConfig.js, the parameter throws an error
    of e.remove() is not a function & needs debugging, however this code works perfectly for now.*/

    let checkboxes = document.querySelectorAll('#status');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function updateStatus() {

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

        })

    })

}