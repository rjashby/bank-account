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

BankAccount.prototype.overdrawn = function () {
  if (this.funds < 0) {
    return "Your account is overdrawn by " + "$" + this.funds;
  }
}


// UI LOGIC
// function disableField(val) {
//   let myVar = document.getElementById("deposit");
//   myVar.disabled = (val.length > 0 );
// }

 // var disableField = function () {
  //   var state = document.getElementById("deposit").value.length > 0;
  //   document.getElementById("withdrawal").disabled = state;
  // }

  function disableWith() {
    let state = document.getElementById("deposit").value.length > 0;
    document.getElementById("withdrawal").disabled = state;
  }

  function disableDep() {
    let state = document.getElementById("withdrawal").value.length > 0;
    document.getElementById("deposit").disabled = state;
  }

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
    $(".balance").show();
    $("#myBalance").text("$" +myAccount.funds);
  })
  
  $("form#account").submit(function(event) {
    event.preventDefault();
    const withdrawalAmount = parseInt($("input#withdrawal").val());
    const depositAmount = parseInt($("input#deposit").val()); 
    myAccount.addFunds(depositAmount);
    myAccount.withdrawFunds(withdrawalAmount);
    myAccount.overdrawn();
    $("input#withdrawal").val("");
    $("input#deposit").val("");
    $(".balance").show();
    $("#myBalance").text("$" +myAccount.funds);
    document.getElementById('account').reset();
  })
});