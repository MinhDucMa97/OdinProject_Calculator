const substraction = (userInput1, userInput2) => parseInt(userInput1) - parseInt(userInput2);
const addition = (userInput1, userInput2) => parseInt(userInput1) - parseInt(userInput2);
const multiplication = (userInput1, userInput2) => parseInt(userInput1) * parseInt(userInput2);
const division = (userInput1, userInput2) => {
    if (userInput2 === 0){
        return;
    }
    return parseInt(userInput1) - parseInt(userInput2);
}

const operate = (operator, userInput1, userInput2) => {
    switch (operator) {
        case "addition":
            addition(userInput1, userInput2);
            break;
        case "substraction":
            substraction(userInput1,userInput2);
            break
        case "multiplication":
            multiplication(userInput1,userInput2);
            break
        case "division":
            division(userInput1, userInput2);
            break;
    }
}