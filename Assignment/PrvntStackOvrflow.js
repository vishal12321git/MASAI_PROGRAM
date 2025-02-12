function factorial(n){
    if(n<0 || isNaN(n) || n%1!=0)return "Invalid input"
    if(n===0)return 1;
    return n*factorial(n-1);
}
console.log(factorial(7))
console.log(factorial(0))
console.log(factorial(-3))
console.log(factorial("hello"))
console.log(factorial(3.5))


