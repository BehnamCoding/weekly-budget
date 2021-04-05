// imports
import ui from './ui';
import handle from './handle';


// variables
const name_input = document.querySelector('#right-panel #name');
const price_input = document.querySelector('#right-panel #price');
const add_button = document.querySelector('#right-panel #add-button');


// loadAllEvents
loadAllEvents();

function loadAllEvents() {

    document.addEventListener('DOMContentLoaded', loadFunc);

    add_button.addEventListener('click', addFunc);

}

// functions

// addFunc
function addFunc(e) {
    // get input values
    let nameValue = name_input.value;
    let priceValue = price_input.value;

    // check inputs fill
    if (nameValue == '' || priceValue == '') {
        ui.showMessage('لطفا تمام فیلدها را پر کنید.', 'danger');
    } else {
        // add list item function
        ui.addListItems(nameValue, priceValue);
        // handle budget
        handle.calculateBudget(priceValue);
    }


}

// loadFunc
function loadFunc() {
    // get total budget
    let totalBudget = prompt('بودجه خود را وارد کنید.');
    let result = parseInt(totalBudget);

    // set total budget
    handle.getBudget(result);
}
