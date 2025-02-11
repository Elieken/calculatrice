function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Use a safer evaluation method
        display.value = safeEval(display.value);
    } catch (error) {
        display.value = 'Erreur'; // Consistent error message in French
    }
}

// Simple parser for safe evaluation
function safeEval(expr) {
    // Replace any invalid characters
    expr = expr.replace(/[^0-9+\-*/().]/g, '');
    return Function('"use strict";return (' + expr + ')')();
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

document.addEventListener('keydown', function(event) {
    const key = event.key; // La touche enfoncée par l'utilisateur
    
    if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
