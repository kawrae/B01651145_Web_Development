function calculateBMR() {
    let age = parseFloat(document.getElementById("age").value);
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let gender = document.getElementById("gender-unit").value;

    let valid = true;

    if (isNaN(age) || age <= 0) {
        document.getElementById("age-error").textContent = "Enter an age above 0 please..";
        valid = false;
    } else {
        document.getElementById("age-error").textContent = "";
    }

    if (isNaN(weight) || weight <= 0) {
        document.getElementById("weight-error").textContent = "Weight is invalid..";
        valid = false;
    } else {
        document.getElementById("weight-error").textContent = "";
    }

    if (isNaN(height) || height <= 0) {
        document.getElementById("height-error").textContent = "Enter height above 0...";
        valid = false;
    } else {
        document.getElementById("height-error").textContent = "";
    }

    if (!valid) return;

    
    let bmr;


    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    bmr = bmr.toFixed(2);

    document.getElementById("results").innerHTML = `
        Your BMR is <span style="color: #66ff66">${bmr}</span> calories/day.
    `;
}
