function getBMI() {

    let weight = prompt("Enter your weight in kg:");
    let height = prompt("Enter your height in cm:"); // changed here

    weight = parseFloat(weight);
    height = parseFloat(height);

    if (!weight || !height || height <= 0) {
        document.getElementById("result").innerText = "❌ Invalid input!";
        return;
    }

    // ✅ Convert cm to meters
    let heightInMeters = height / 100;

    // BMI formula
    let bmi = weight / (heightInMeters * heightInMeters);

    let category = "";
    let emoji = "";

    if (bmi < 18.5) {
        category = "Underweight";
        emoji = "🥺";
    } 
    else if (bmi < 25) {
        category = "Normal";
        emoji = "💪";
    } 
    else if (bmi < 30) {
        category = "Overweight";
        emoji = "😅";
    } 
    else {
        category = "Obese";
        emoji = "⚠️";
    }

    document.getElementById("result").innerText =
        `Your BMI is ${bmi.toFixed(2)} (${category}) ${emoji}`;
}