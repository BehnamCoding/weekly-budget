// imports

const uiFunc = (function () {

    class Ui {
        constructor() {
            this.middle_panel = document.querySelector('#middle-panel');
            this.alert_div = document.querySelector('#message');
        }

        showMessage(text, color) {
            // create alert div
            let alertDiv = document.createElement('div');
            alertDiv.textContent = text;
            alertDiv.classList = `alert alert-message alert-${color} mt-3`;

            // add alert to document
            if (this.alert_div.innerHTML == '') {
                this.alert_div.appendChild(alertDiv);
            }

            // set timeout for alert display
            setTimeout(() => {
                this.alertCheck();
            }, 3000);
        }

        alertCheck() {
            const alert = document.querySelector('.alert-message');
            // check if alert class exists
            if (alert) {
                document.querySelector('.alert-message').remove();
            }
        }

        addListItems(name, price) {
            // create li tag
            const li = document.createElement('li');
            li.classList = 'list-group-item list-group-item-action';
            li.innerHTML = `
            <span class="text">${name}</span>
            <span class="badge bg-danger">
              <i class="fas fa-dollar-sign"></i><span class="price">${price}</span>
            </span>
            `

            // append li into ui
            this.middle_panel.appendChild(li);

            // reset inputs
            document.querySelector('#right-panel #name').value = '';
            document.querySelector('#right-panel #price').value = '';
        }

    }

    // instance
    const ui = new Ui();

    // return methods
    return {
        addListItems: function (name, price) {
            return ui.addListItems(name, price);
        },
        showMessage: function (text, color) {
            return ui.showMessage(text, color);
        }
    }

})()

export default uiFunc; // export main function to use return object.