let result = "";
let firstInput = "0",
  secondInput = "0",
  operator = "";
let isInput = true;

const subtraction = (userInput1, userInput2) =>
  parseFloat(userInput1) - parseFloat(userInput2);
const addition = (userInput1, userInput2) =>
  parseFloat(userInput1) + parseFloat(userInput2);
const multiplication = (userInput1, userInput2) =>
  parseFloat(userInput1) * parseFloat(userInput2);
const division = (userInput1, userInput2) => {
  if (userInput2 === 0) {
    return;
  }
  return parseFloat(userInput1) / parseFloat(userInput2);
};

const clearInput = () => {
  result = "";
  firstInput = "0";
  secondInput = "0";
  operator = "";

  const display = document.querySelector(".display");
  display.textContent = "0";
};

const operate = (operatorInput, userInput1, userInput2) => {
  switch (operatorInput) {
    case "+":
      result = addition(userInput1, userInput2);
      break;
    case "-":
      result = subtraction(userInput1, userInput2);
      break;
    case "*":
      result = multiplication(userInput1, userInput2);
      break;
    case "/":
      result = division(userInput1, userInput2);
      break;
  }
  displayNum(result);
};

function displayNum(numToDisplay) {
  let display = document.querySelector(".display");
  if (!isNaN(parseFloat(numToDisplay))) {
    display.innerHTML = numToDisplay;
  }
}

function getUserInput() {
  displayNum("0");
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      
      if (!isNaN(parseFloat(element.value)) || element.value === "." ) {
        if (isInput) {
          if (firstInput === "0"){
            firstInput = "0" +  element.value;
          }
          else {
            firstInput = result !== "" ? result : firstInput + element.value;
          }
          displayNum(firstInput);
        } 
        else {
          secondInput += element.value;
          displayNum(secondInput);
        }
      }

      if (
        element.value === "+" ||
        element.value === "-" ||
        element.value === "*" ||
        element.value === "/"
      ) {
        if (result !== "") {
          firstInput = result;
          secondInput = "";
        }
        operator = element.value;
        isInput = false;
      }

      if (element.value === "AC") {
        clearInput();
        isInput = true;
        displayNum("0");
      }

      if (element.value === "=") {
        operate(operator, firstInput, secondInput);
        displayNum(result.toString());
        isInput = true;
        secondInput = "";
      }
    });
  });
}

getUserInput();
