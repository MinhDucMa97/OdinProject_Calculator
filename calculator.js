let result = "";
let firstInput = "",
  secondInput = "",
  operator = "";
let isInput = true;

const subtraction = (userInput1, userInput2) =>
  parseInt(userInput1) - parseInt(userInput2);
const addition = (userInput1, userInput2) =>
  parseInt(userInput1) + parseInt(userInput2);
const multiplication = (userInput1, userInput2) =>
  parseInt(userInput1) * parseInt(userInput2);
const division = (userInput1, userInput2) => {
  if (userInput2 === 0) {
    return;
  }
  return parseInt(userInput1) / parseInt(userInput2);
};

const clearInput = () => {
  result = "";
  firstInput = "";
  secondInput = "";
  operator = "";

  const display = document.querySelector(".display");
  display.textContent = "";
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
  if (Number.isInteger(parseFloat(numToDisplay))) {
    display.innerHTML = parseInt(numToDisplay);
  }
}

function getUserInput() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      if (Number.isInteger(parseInt(element.value)) || element.value === ".") {
        if (isInput) {
          firstInput = result !== "" ? result : firstInput + element.value;
          displayNum(firstInput);
        } else {
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
        operator = element.value;
        isInput = false;
      }

      if (element.value === "AC") {
        clearInput();
        isInput = true;
        displayNum(null);
      }

      if (element.value === "=") {
        operate(operator, firstInput, secondInput);
        displayNum(result);
        isInput = true;
        secondInput = "";
      }
    });
  });
}

getUserInput();
