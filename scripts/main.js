function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operator = document.getElementById("oper").value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers.");
        return;
    }

    let symbol;
    switch (operator) {
        case "add":
            symbol = "+";
            break;
        case "sub":
            symbol = "-";
            break;
        case "mul":
            symbol = "*";
            break;
        case "div":
            symbol = "/";
            break;
    }

    // Create a question object
    const newProblem = {
        id: Date.now(),
        num1: num1,
        num2: num2,
        oper: symbol,
        ans: "?", // Placeholder for the answer
    };

    // Select question container
    const questionContainer = document.getElementById("question-container");

    // Create a new div for the question
    const questionDiv = document.createElement("div");
    questionDiv.id = newProblem.id;
    questionDiv.style.width = "150px";
    questionDiv.style.height = "150px";
    questionDiv.style.backgroundColor = "yellow";
    questionDiv.style.display = "flex";
    questionDiv.style.flexDirection = "column";
    questionDiv.style.alignItems = "center";
    questionDiv.style.justifyContent = "center";
    questionDiv.style.border = "1px solid black";
    questionDiv.style.margin = "10px";
    questionDiv.style.padding = "10px";
    questionDiv.style.textAlign = "center";

    // Add question text with num1 and num2 displayed separately
    questionDiv.innerHTML = `
        <p>num1 = ${newProblem.num1}</p>
        <p>num2 = ${newProblem.num2}</p>
        <p>Operator: ${newProblem.oper}</p>
        <p>= ?</p>
    `;

    // Append the new question div inside the container
    questionContainer.appendChild(questionDiv);
}
