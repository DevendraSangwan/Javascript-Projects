document.getElementById("analyzeBtn").addEventListener("click", function () {
    let input = document.getElementById("marks").value.trim();
//validations
    if (input === "") {
        alert("Please enter student marks.");
        return;
    }
    if (!/^[0-9,\s]+$/.test(input)) {
        alert("Only numbers and commas are allowed.");
        return;
    }
    if (input.startsWith(",") || input.endsWith(",") || input.includes(",,")) {
        alert("Invalid comma placement.");
        return;
    }

//logic
    let scores = input.split(",").map(mark => Number(mark.trim()));
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 0 || scores[i] > 100) {
            alert(`Student ${i + 1}: Marks must be between 0 and 100.`);
            return;
        }
    }

    let total = 0;
    let highest = scores[0];
    let lowest = scores[0];
    let passedStudents = 0;
    let failedStudents = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highest) {
            highest = scores[i];
        }
        if (scores[i] < lowest) {
            lowest = scores[i];
        }
        if (scores[i] >= 40) {
            passedStudents++;
        } else {
            failedStudents++;
        }
    }

    let average = total / scores.length;
    let classResult =
        average > 70 ? " Class Passed" : " Class Failed";

    let output = `
        <h2>Result</h2>
        <p><strong>Student Scores:</strong> ${scores.join(", ")}</p>
        <p><strong>Average Grade:</strong> ${average.toFixed(2)}</p>
        <p><strong>Highest Grade:</strong> ${highest}</p>
        <p><strong>Lowest Grade:</strong> ${lowest}</p>
        <p><strong>Passed Students:</strong> ${passedStudents}</p>
        <p><strong>Failed Students:</strong> ${failedStudents}</p>
        <p><strong>${classResult}</strong></p>
        <hr>
        <h3>Student Grades</h3>
    `;

    for (let i = 0; i < scores.length; i++) {
        let grade;
        if (scores[i] >= 90) {
            grade = "A";
        } else if (scores[i] >= 80) {
            grade = "B";
        } else if (scores[i] >= 70) {
            grade = "C";
        } else if (scores[i] >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        output += `<p>Student ${i + 1}: ${scores[i]} ➜ Grade <strong>${grade}</strong></p>`;
    }
    document.getElementById("output").innerHTML = output;
});