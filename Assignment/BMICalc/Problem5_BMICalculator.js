function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        console.log(height === 0 ? "Invalid input, height cannot be zero." : "Invalid input, height and weight must be positive numbers.");
        return;
    }

    let bmi = weight / (height * height);
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);
}

calculateBMI(70, 1.75);  
calculateBMI(55, 1.60);  
calculateBMI(90, 1.80);  

calculateBMI(70, 0);    
calculateBMI(-70, 1.75); 
calculateBMI(70, -1.75); 
