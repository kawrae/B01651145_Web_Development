function calculateBMI() {
    let heightCm = parseFloat(document.getElementById("height").value);
    let weightKg = parseFloat(document.getElementById("weight").value);
    const heightUnit = document.getElementById("height-unit").value;
    const weightUnit = document.getElementById("weight-unit").value;

    let valid = true;

    // Validate height
    if (isNaN(heightCm) || heightCm <= 0) {
        document.getElementById("height-error").textContent = "Please enter a valid height.";
        valid = false;
    } else {
        document.getElementById("height-error").textContent = "";
    }

    // Validate weight
    if (isNaN(weightKg) || weightKg <= 0) {
        document.getElementById("weight-error").textContent = "Please enter a valid weight.";
        valid = false;
    } else {
        document.getElementById("weight-error").textContent = "";
    }

    if (!valid) return;

    // Convert units if necessary
    if (heightUnit === "in") {
        heightCm = heightCm * 2.54; // Convert inches to cm
    }
    if (weightUnit === "lb") {
        weightKg = weightKg * 0.453592; // Convert lbs to kg
    }

    // Convert height from centimeters to meters
    let heightM = heightCm / 100;

    // Calculate BMI
    let bmi = weightKg / (heightM * heightM);
    bmi = bmi.toFixed(2);  // Round to 2 decimal places

    let bmiCategory;
    let color;
    let advice;

    // Determine BMI category and assign color and advice
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
        color = "#66ccff"; // Light Blue
        advice = "Consider a balanced diet with more calorie intake. Consult a healthcare provider for personalized advice.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Healthy Weight";
        color = "#66ff66"; // Green
        advice = "Great job! Maintain your current lifestyle with a balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
        color = "#ffcc00"; // Yellow
        advice = "Consider adopting a healthier diet and regular physical activity. Consult a healthcare provider for personalized advice.";
    } else {
        bmiCategory = "Obese";
        color = "#ff6666"; // Red
        advice = "It's important to consult with a healthcare provider. They can help create a personalized plan for healthy weight management.";
    }

    // Display result with color
    document.getElementById("results").innerHTML = `
        Your BMI is <span style="color: ${color}">${bmi}</span><br>
        Category: <span style="color: ${color}">${bmiCategory}</span>
    `;
    document.getElementById("advice").textContent = advice;
}
