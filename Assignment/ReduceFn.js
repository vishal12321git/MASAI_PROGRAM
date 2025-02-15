function categoryCounts(categories){
    const objCount = categories.reduce((acc,category)=>{
        acc[category]=(acc[category] || 0) + 1;
        return acc;
    },{})

    console.log(objCount);
    console.log(Object.entries(objCount));
    const sortedCategory = Object.entries(objCount)
    .sort((a,b)=>(b[1]-a[1]))
    .map(([key,value])=>({key,value}))
    console.log(sortedCategory);
}

let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

categoryCounts(categories);