let row=4
let col=5
for(let i=1;i<=row;i++){
    let s=(i%2==0)?(".."+"[]..".repeat(col)):("[]..".repeat(col))
    console.log(s);
}