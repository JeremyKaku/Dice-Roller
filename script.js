function rollDice() {
    const input = document.getElementById('input').value.trim();
    const resultElement = document.getElementById('result');

    // Clear previous result
    resultElement.textContent = '';

    // Split the input string into number of dice and number of sides
    const [numDice, numSides] = input.split('d').map(Number);

    // Validate input
    if (isNaN(numDice) || isNaN(numSides) || numDice < 1 || numDice > 100 || numSides < 2 || numSides > 100) {
        resultElement.textContent = "Invalid input. Please provide input in the format 'NdM', where N is the number of dice and M is the number of sides of the dice.";
        return;
    }

    let sum = 0;
    for (let i = 0; i < numDice; i++) {
        // Roll each die and add the result to the sum
        sum += Math.floor(Math.random() * numSides) + 1;
    }

    // Display result
    resultElement.textContent = `Result: ${sum}`;
}
