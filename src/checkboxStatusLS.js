import updateStatus from './buttonsConfig'
export default function checkboxStatus() {

    /* As of 5th Feb 2021, the bug is now fixed. */

    let checkboxes = document.querySelectorAll('#status');
    checkboxes.forEach(checkbox => { checkbox.addEventListener('click', updateStatus()) });

}