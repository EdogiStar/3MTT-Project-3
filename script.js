
    const display = document.getElementById("display");
    const digitButtons = document.querySelectorAll(".digit");
    const operatorButtons = document.querySelectorAll(".operator");
    const clearButton = document.querySelector(".clear");
    const equalButton = document.querySelector(".equal");

    // Add digits to display
    digitButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (display.textContent === "0") {
          display.textContent = button.textContent;
        } else {
          display.textContent += button.textContent;
        }
      });
    });

    // Add operators
    operatorButtons.forEach(button => {
      button.addEventListener("click", () => {
          display.textContent += button.textContent;
      });
    });

    // Clear display
    clearButton.addEventListener("click", () => {
      display.textContent = "0";
    });

    // Evaluate expression
    equalButton.addEventListener("click", () => {
      try {
        let result = eval(display.textContent); // basic evaluation
        display.textContent = result;
      } catch {
        display.textContent = "Error";
      }
    });

