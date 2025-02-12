const checkout = {

    items: [],
    
    total: 0,
    
    addItem(item) {
    
    if (typeof item.price !== 'number' || isNaN(item.price)) {
    
    console.log("Invalid price.");
    
    return;
    
    }
    
    this.items.push(item);
    
    this.total += item.price;

    console.log("Item added")
    
    },
    
    getTotal() {
        return `Total: ${parseFloat(this.total).toFixed(2)}`; 
       
    }
};
    
    
    
    checkout.addItem({ name: "Coffee Maker", price: "99.95" });
    
    checkout.addItem({ name: "Milk", price: 3.50 });
    
    console.log(checkout.getTotal()); // Expected issue !