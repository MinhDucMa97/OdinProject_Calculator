let result  = null;
let firstInput = "", secondInput = "", operator = null;
let isInput = true;

const substraction = (userInput1, userInput2) => 
  parseInt(userInput1) - parseInt(userInput2);
const addition = (userInput1, userInput2) =>
  parseInt(userInput1) - parseInt(userInput2);
const multiplication = (userInput1, userInput2) =>
  parseInt(userInput1) * parseInt(userInput2);
const division = (userInput1, userInput2) => {
  if (userInput2 === 0) {
    return;
  }
  return parseInt(userInput1) / parseInt(userInput2);
};

const clearInput = () => {
  inputContainer.length = 0;
  result = null;
  firstInput = null;
  secondInput = null;
} 

const operate = (operatorInput, userInput1, userInput2) => {
  
  switch (operatorInput) {
    case "addition":
      result = addition(userInput1, userInput2);
      break;
    case "substraction":
      result = substraction(userInput1, userInput2);
      break;
    case "multiplication":
      result = multiplication(userInput1, userInput2);
      break;
    case "division":
      result = division(userInput1, userInput2);
      break;
    case "AC":
      clearInput();
  }
  displayNum(result);
};

function displayNum(numToDisplay) {
  let display = document.querySelector(".display");
  if (Number.isInteger(parseInt(numToDisplay))) {
    display.innerHTML = parseInt(numToDisplay);
  }
  else if(numToDisplay === "."){
    display.innerHTML = numToDisplay;
  }
}

function getUserInput() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      if(Number.isInteger(parseInt(element.value))){
        if(isInput){
          firstInput = result !== null ? result : firstInput + element.value;
          displayNum(firstInput);
        }
        else {
          secondInput += element.value;
          displayNum(secondInput)
        }
      }

      if(element.value === "+" || element.value === "-" || element.value === "*" || element.value === "/"){
        operator = element.value;
        isInput = false;
      }
    });
  });
}

getUserInput();
