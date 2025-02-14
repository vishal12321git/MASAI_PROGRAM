function processProducts(){
    let names = arr.map((obj)=>obj.name);
    arr.forEach((obj)=>{
        console.log(obj.name,(obj.price>50)?`is above $50`:`is below $50`)
    })
}
const arr= [
    {
        name:"Laptop",
        price:1000
    },
    {
        name:"Mouse",
        price:20
    }
]
processProducts(arr);