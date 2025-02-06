function calculateSimpleInterest(P, R, T) {
    if (P < 0 || R < 0 || T < 0) {
        console.log("Invalid input, all values must be non-negative.");
        return;
    }

    let interest = (P * R * T) / 100;
    console.log(`The simple interest is: ${interest.toFixed(1)}`);
}

calculateSimpleInterest(1000, 5, 3);  
calculateSimpleInterest(1500, 7, 5); 
calculateSimpleInterest(0, 6, 2);   

calculateSimpleInterest(-100, 5, 2);  
calculateSimpleInterest(1000, -5, 2);
