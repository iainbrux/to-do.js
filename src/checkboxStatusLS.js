import updateStatus from './buttonsConfig'
export default function checkboxStatus() {

    let checkboxes = document.querySelectorAll('#status');
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', () => updateStatus()));

}