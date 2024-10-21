function calculateBMI() {
    let heightCm = parseFloat(document.getElementById("height").value);
    let weightKg = parseFloat(document.getElementById("weight").value);

    if (isNaN(heightCm) || isNaN(weightKg)) {
        window.alert("Please enter valid numbers for both height and weight.");
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        return;
    }

    // Convert height from centimeters to meters
    let heightM = heightCm / 100;

    // Calculate BMI
    let bmi = weightKg / (heightM * heightM);
    bmi = bmi.toFixed(2);  // Round to 2 decimal places

    let bmiCategory;

    // Determine BMI category
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Healthy Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    // Display result
    document.getElementById("results").innerHTML = "Your BMI is " + bmi + "<br>Category: " + bmiCategory;
}
