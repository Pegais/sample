let fruit =["apple","mango","banana"];

let narr = [];
narr = fruit.filter(function(fruits){
    return fruits.length>5;
})

console.log(fruit);
console.log(narr);