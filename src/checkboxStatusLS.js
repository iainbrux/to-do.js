export default function checkboxStatus() {

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