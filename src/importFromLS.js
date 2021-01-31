export default function importFromLocalStorage() {

    let taskNames = Object.keys(localStorage);
    let tasks = [];

    taskNames.forEach(task => {
        tasks.push(JSON.parse(localStorage.getItem(task)))
    })

    tasks.forEach(task => {

        (function addTaskToDOM() {

            let container = document.querySelector('.tasks-container');

            let taskDiv = document.createElement('div');
            let descDiv = document.createElement('div');
            let dueDiv = document.createElement('div');
            let btnsDiv = document.createElement('div');
            let deleteBtn = document.createElement('div');
            let editBtn = document.createElement('div');
            let checkbox = document.createElement('input');

            (function inputTypeCheckbox() {

                checkbox.type = "checkbox";
                checkbox.name = "status";
                checkbox.id = "status";
                checkbox.addEventListener('click', function updateStatus() { //Cannot prevent DRY for now (bug prevention)

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

                });

            })();

            (function addClassNames() {

                taskDiv.classList.add('task');
                descDiv.classList.add('description');
                dueDiv.classList.add('due');
                btnsDiv.classList.add('btns');

            })();

            (function addButtonsToTaskDiv() {

                deleteBtn.classList.add('delete');
                deleteBtn.innerText = "Delete";
                deleteBtn.addEventListener('click', () => {

                    localStorage.removeItem(descDiv.innerText);
                    taskDiv.remove();

                })

                editBtn.classList.add('edit');
                editBtn.innerText = "Edit";
                editBtn.addEventListener('click', function editTask() {

                    let taskName = document.querySelector('#task');
                    let taskDate = document.querySelector('#due-date');
                    let newToDo = document.querySelector('.to-do-add');

                    newToDo.style.display = "flex";
                    taskDiv.remove();
                    taskName.value = descDiv.innerText;
                    taskDate.value = dueDiv.innerText;
    
                });

                btnsDiv.append(editBtn, deleteBtn);

            })();

            (function addDataToDivs() {

                descDiv.innerText = task.name;
                dueDiv.innerText = task.due;
                checkbox.checked = task.status;

            })();

            (function appendToContainer() {

                taskDiv.append(checkbox, descDiv, dueDiv, btnsDiv);
                container.append(taskDiv);

            })();

        })();

    })

}