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
  return parseInt(userInput1) - parseInt(userInput2);
};

const operate = (operator, userInput1, userInput2) => {
  let calculatedResult;
  switch (operator) {
    case "addition":
      calculatedResult = addition(userInput1, userInput2);
      break;
    case "substraction":
      calculatedResult = substraction(userInput1, userInput2);
      break;
    case "multiplication":
      calculatedResult = multiplication(userInput1, userInput2);
      break;
    case "division":
      calculatedResult = division(userInput1, userInput2);
      break;
  }
  return calculatedResult;
};

function displayNum(numToDisplay) {
  let display = document.querySelector(".display");
  if (Number.isInteger(parseInt(numToDisplay))) {
    display.innerHTML = parseInt(numToDisplay);
  } else {
    display.innerHTML = numToDisplay;
  }
}

function getUserInput() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      displayNum(element.value);
    });
  });
}

getUserInput();
