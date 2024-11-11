function calculateBMI() {
    let heightCm = parseFloat(document.getElementById("height").value);
    let weightKg = parseFloat(document.getElementById("weight").value);
    const heightUnit = document.getElementById("height-unit").value;
    const weightUnit = document.getElementById("weight-unit").value;

    let valid = true;

    if (isNaN(heightCm) || heightCm <= 0) {
        document.getElementById("height-error").textContent = "Please enter a valid height.";
        valid = false;
    } else {
        document.getElementById("height-error").textContent = "";
    }

    if (isNaN(weightKg) || weightKg <= 0) {
        document.getElementById("weight-error").textContent = "Please enter a valid weight.";
        valid = false;
    } else {
        document.getElementById("weight-error").textContent = "";
    }

    if (!valid) return;

    if (heightUnit === "in") {
        heightCm = heightCm * 2.54;
    }
    if (weightUnit === "lb") {
        weightKg = weightKg * 0.453592;
    }

    let heightM = heightCm / 100;

    let bmi = weightKg / (heightM * heightM);
    bmi = bmi.toFixed(2);

    let bmiCategory;
    let color;
    let advice;

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
        color = "#66ccff";
        advice = "Consider a balanced diet with more calorie intake. Consult a healthcare provider for personalized advice.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Healthy Weight";
        color = "#66ff66";
        advice = "Great job! Maintain your current lifestyle with a balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
        color = "#ffcc00";
        advice = "Consider adopting a healthier diet and regular physical activity. Consult a healthcare provider for personalized advice.";
    } else {
        bmiCategory = "Obese";
        color = "#ff6666";
        advice = "It's important to consult with a healthcare provider. They can help create a personalized plan for healthy weight management.";
    }

    document.getElementById("results").innerHTML = `
        Your BMI is <span style="color: ${color}">${bmi}</span><br>
        Category: <span style="color: ${color}">${bmiCategory}</span>
    `;
    document.getElementById("advice").textContent = advice;
}
