// imports

const handleFunc = (function () {

  class Handle {
    constructor() {
      this.total_budget = document.querySelector('#left-panel .items #total-budget');
      this.left_budget = document.querySelector('#left-panel .items #left-budget');
      this.leftPrice_alert = document.querySelector('#left-panel .left-alert');
    }

    getBudget(budget) {
      // set total budget
      this.total_budget.textContent = budget;
      // set left budget
      this.left_budget.textContent = budget;
    }

    calculateBudget(amount) {
      // calculate left price
      this.left_budget.textContent -= amount;

      // change price state
      if ((this.total_budget.textContent / 4) > this.left_budget.textContent) {
        this.leftPrice_alert.classList.remove('alert-success', 'alert-warning');
        this.leftPrice_alert.classList.add('alert-danger');
      } else if ((this.total_budget.textContent / 2) > this.left_budget.textContent) {
        this.leftPrice_alert.classList.remove('alert-success2000');
        this.leftPrice_alert.classList.add('alert-warning');
      }
    }

  }

  // instance
  let handle = new Handle();

  // return methods
  return { // object to return methods in this class.
    getBudget: function (budget) {
      handle.getBudget(budget);
    },
    calculateBudget: function (amount) {
      return handle.calculateBudget(amount);
    }
  }

})()

export default handleFunc; // export main function to use return object.