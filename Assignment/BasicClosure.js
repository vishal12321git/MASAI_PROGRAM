function outerFn(){
    let message = "Namaste Duniya!"
    return ()=>console.log(message)
}
let store = outerFn();
store();