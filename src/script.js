// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");

// Function to update display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to delete last character
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate result
function calculate() {
    try {
        display.value = eval(display.value); // ⚠️ eval used for simplicity
    } catch {
        display.value = "Error";
    }
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.id === "clear") {
            clearDisplay();
        } else if (button.id === "backspace") {
            backspace();
        } else if (button.id === "equals") {
            calculate();
        } else {
            appendToDisplay(value);
        }
    });
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/", "."].includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        backspace();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});
