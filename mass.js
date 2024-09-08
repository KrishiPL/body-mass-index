const bmiCalculater = (weight, height) => {
    let heightSquare = height * height;
    let bmi = weight / heightSquare;
    let bmi1 = bmi.toFixed(1);
    return bmi1;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }
    
    let bodyMassIndex = bmiCalculater(weight, height);
    document.getElementById('result').innerText = `Your BMI is ${bodyMassIndex}`;
}
