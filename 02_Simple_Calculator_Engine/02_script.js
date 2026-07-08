function calculate(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero.";
            }
            return num1 / num2;
        default:
            return "Invalid Operation";
    }

}

document.getElementById("calculateBtn").addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

// Validation
    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        alert("Please enter both numbers.");
        return;
    }

    if (operation === "") {
        alert("Please select an operation.");
        return;
    }

//show result
    let result = calculate(num1, num2, operation);
    document.getElementById("output").innerHTML =
        `<strong>${num1} ${operation} ${num2} = ${result}</strong>`;

// Clear Inputs
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
document.getElementById("operation").value = "";
});