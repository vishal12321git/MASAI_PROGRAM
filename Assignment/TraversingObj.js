let book = [
    {
        title:"The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937
    },
    {
        title:"Lorel epsum",
        author: "John Doe",
        year: 1945
    },
    {
        title:"Udan",
        author: "J.P.J abdul kalam",
        year: 1989
    }
]
for(let ele of book){
    for(let key in ele){
        console.log(`${key}: ${ele[key]}`)
    }
}