function compareNumbers(number1, number2) {
    if (number1 > number2) {
        console.log(`${number1} is larger than ${number2}`);
    } else if (number1 < number2) {
        console.log(`${number2} is larger than ${number1}`);
    } else {
        console.log("Both numbers are equal");
    }
}

compareNumbers(5, 10);
compareNumbers(7, 7);  
compareNumbers(-1, -10); 
compareNumbers(0, 0);  
compareNumbers(-5, -3); 
