// --- PART 1: Button Color Change ---
const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', function() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Apply the color to the button background
    colorBtn.style.backgroundColor = randomColor;
});


// --- PART 2: Time-Based Greeting ---
const greetBtn = document.getElementById('greetBtn');

greetBtn.addEventListener('click', function() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    alert(greetingMessage);
});


// --- PART 3: Basic Calculator ---
const calcBtn = document.getElementById('calcBtn');

calcBtn.addEventListener('click', function() {
    // Get values from input fields
    const val1 = document.getElementById('num1').value;
    const val2 = document.getElementById('num2').value;

    // Convert strings to numbers (parseFloat handles decimals)
    const number1 = parseFloat(val1);
    const number2 = parseFloat(val2);

    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        document.getElementById('result').style.color = "red";
    } else {
        const sum = number1 + number2;
        document.getElementById('result').innerText = "Result: " + sum;
        document.getElementById('result').style.color = "#28a745";
    }
});