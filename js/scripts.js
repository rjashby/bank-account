// BUSINESS LOGIC

function BankAccount() {
  this.name = name;
  this.funds = 0;
}


// UI LOGIC

$(document).ready(function() {
  let myAccount = new BankAccount();
  $("form#register").submit(function(event) {
    event.preventDefault();
    const myName = $("input#name").val();
    const initialDeposit = parseInt($("input#initial").val())
  })

  $("form#account").submit(function(event) {
    event.preventDefault();
    const withdrawalAmount = parseInt($("input#deposit").val())
    const depositAmount = parseInt($("input#withdrawal").val())
  })
});