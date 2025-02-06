function calculateFinalPrice(originalPrice) {
    if (originalPrice < 0) {
        console.log("Invalid price, the price must be a non-negative number.");
        return;
    }

   
    let finalPrice = originalPrice > 20 ? originalPrice * 0.9 : originalPrice;

    
    console.log(`The final price of the item is: ${finalPrice}`);
}

calculateFinalPrice(25); 
calculateFinalPrice(20);  
calculateFinalPrice(15);  

calculateFinalPrice(-5);  
