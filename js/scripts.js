// BUSINESS LOGIC

function BankAccount() {
  this.name = name;
  this.funds = 0;
}

BankAccount.prototype.addInitial = function(initialDeposit){
  if (initialDeposit >= 0){
    return this.funds += initialDeposit;
  } else {
    return "Please make an initial deposit."
  }
}

BankAccount.prototype.addName = function(name){
  return this.name = name;
}

BankAccount.prototype.addFunds = function(deposit) {
  if (deposit >= 0) {
    this.funds += deposit;
  } else {
    return "please enter a positive number"
  }
}

BankAccount.prototype.withdrawFunds = function(withdrawal) {
  if (withdrawal >= 0) {
    this.funds -= withdrawal;
  } else {
    return "please enter a positive number"
  }
}

// UI LOGIC

$(document).ready(function() {
  let myAccount = new BankAccount();
  $("form#register").submit(function(event) {
    event.preventDefault();
    const myName = $("input#name").val();
    const initialDeposit = parseInt($("input#initial").val());
    myAccount.addName(myName);
    myAccount.addInitial(initialDeposit);
    $("input#name").val("");
    $("input#initial").val("");
    console.log(myName);
    console.log(initialDeposit);
    console.log(myAccount);
  })

  $("form#account").submit(function(event) {
    event.preventDefault();
    const withdrawalAmount = parseInt($("input#withdrawal").val())
    const depositAmount = parseInt($("input#deposit").val())
    myAccount.addFunds(depositAmount);
    myAccount.withdrawFunds(withdrawalAmount);
    $("input#withdrawal").val("");
    $("input#deposit").val("");
    console.log(withdrawalAmount);
    console.log(depositAmount);
    console.log(myAccount);
  })
});