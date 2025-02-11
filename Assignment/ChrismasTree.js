console.log("Christmas Tree")
let n=5
for(let i=1;i<=n;i++){
    let s = ""
    s+=" ".repeat(n-i)+"*".repeat(-1+2*i)+" ".repeat(n-i);
    console.log(s)
}
console.log(" ".repeat(n-1)+"|")

