import tasks from './submit';

let indexObj = 0; //Creates the index for object in local storage

export default function addToLocalStorage(object) {

    let objectJSON = JSON.stringify(object);

    localStorage.setItem(indexObj, objectJSON);

    return indexObj++;

}