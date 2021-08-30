var billAmt = document.querySelector("#amt-given");
var cashAmt = document.querySelector("#csh-given");
var btnCheck = document.querySelector("#check-btn");
var errorMsg = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000,500,100,50,20,10,5,1];
function clickHandler() {
  hideMessage();
  if(billAmt.value > 0){
    if(Number(cashAmt.value) >= Number(billAmt.value)) {
      var remainingAmt = cashAmt.value - billAmt.value;
      amountToReturn(remainingAmt);
    } else {
      errorMessage("Incorrect Cash  Amount");
    }
  } else {
    errorMessage("Invalid Amount");
  }
}

function hideMessage () {
  errorMsg.style.display = "none";
}

function errorMessage (msg) {
  errorMsg.style.display = "block";
  errorMsg.innerText = msg;
}

function amountToReturn(amtReturn) {
  for (var i=0; i<notes.length; i++){
    noOfNotes[i].innerText = Math.trunc(amtReturn/notes[i]);
    amtReturn = amtReturn%notes[i];
  }
}

btnCheck.addEventListener("click", clickHandler);