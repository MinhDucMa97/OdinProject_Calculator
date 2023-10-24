let result = "";
let firstInput = "",
  secondInput = "",
  operator = "";
let isInput = true;
let chainOperator = false;

const subtraction = (userInput1, userInput2) =>
  parseFloat(userInput1) - parseFloat(userInput2);
const addition = (userInput1, userInput2) =>
  parseFloat(userInput1) + parseFloat(userInput2);
const multiplication = (userInput1, userInput2) =>
  parseFloat(userInput1) * parseFloat(userInput2);
const division = (userInput1, userInput2) => {
  if (userInput2 === "0") {
    return "ERROR";
  }
  return parseFloat(userInput1) / parseFloat(userInput2);
};

const percentage = (userInput) => userInput / 100;

const signConvertor = (userInput) => {
  if (!isNaN(parseFloat(userInput))) {
    if (parseFloat(userInput) < 0) {
      return userInput.replace("-", "");
    } else {
      return "-" + userInput;
    }
  } else {
    return "ERROR";
  }
};

const clearInput = () => {
  result = "";
  firstInput = "";
  secondInput = "";
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
};

function displayNum(numToDisplay) {
  let display = document.querySelector(".display");
  if (!isNaN(parseFloat(numToDisplay))) {
    display.innerHTML = numToDisplay;
  } else if (numToDisplay === "ERROR") {
    display.innerHTML = numToDisplay;
  }
}

function getUserInput() {
  displayNum("0");
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      if (!isNaN(parseFloat(element.value)) || element.value === ".") {
        if (isInput) {
          firstInput = result !== "" ? result : firstInput + element.value;
          displayNum(firstInput);
        } else {
          secondInput += element.value;
          displayNum(secondInput);
        }
      }
      if (element.value === "%" || element.value === "sign") {
        if (isInput) {
          if (element.value === "%") {
            firstInput = percentage(firstInput);
          } else {
            firstInput = signConvertor(firstInput);
          }
        } else {
          if (element.value === "%") {
            secondInput = percentage(secondInput);
          } else {
            secondInput = signConvertor(secondInput);
          }
        }
        displayNum(isInput ? firstInput : secondInput);
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
        if(operator !== "" || operator === "="){
          chainOperator = true;
        }

        operator = element.value;
        isInput = false;
      }

      if (element.value === "AC") {
        clearInput();
        isInput = true;
        displayNum("0");
      }

      if(operator !== "" && firstInput !== "" && secondInput !== ""){
        operate(operator,firstInput, secondInput);
      }

      if (element.value === "=" || chainOperator){
        displayNum(result);
        isInput = false;
        secondInput = "";
      }
      // if (element.value === "=") {
      //   operate(operator, firstInput, secondInput);
      //   displayNum(result.toString());
      //   isInput = true;
      //   secondInput = "";
      // }
    });
  });
}

getUserInput();
