
function calculate(operation) {
    // Get the values entered by the user
    const firstNumber = document.getElementById("number1").value;
    const secondNumber = document.getElementById("number2").value;
 
    if (firstNumber === "") {
        document.getElementById("result").textContent = "Please enter the first number.";
        return;
    }

    if (operation !== "square" && secondNumber === "") {
        document.getElementById("result").textContent = "Please enter the second number.";
        return;
    }
 
    // Convert the input values from text into numbers
    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);
 
    let answer;
 
    // Select the correct mathematical operation
    if (operation === "add") {
        answer = number1 + number2;
    } else if (operation === "subtract") {
        answer = number1 - number2;
    } else if (operation === "multiply") {
        answer = number1 * number2;
    } else if (operation === "divide") {
        // Prevent division by zero
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }
 
        answer = number1 / number2;
    }else if (operation === "remainder"){
        if (Number(number2) === 0){
            document.getElementById("result").textContent =
                "Error: Division by zero";
            return;
        } else {
            answer = Number(number1) % Number(number2);
        }
    }else if (operation === "square") {
        answer = number1 ** 2;
        document.getElementById("result").innerText = answer;
    }
    // Display the answer on the webpage
    document.getElementById("result").textContent =
        "Result: " + answer;
}
 
function clearCalculator() {
    // Remove the values from the input fields
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
 
    // Reset the displayed result
    document.getElementById("result").textContent = "Result: 0";
}