//iterating through array with for loop
let arr = [1,2,3,4,5];
let narr =[];
for(let i =0;i<arr.length;i++){
    narr[i] = arr[i]*2;
     
};
console.log(arr);
console.log(narr);

//using map()function
/// map assign every value within the array its own function.

let arr2 =[1,2,3,4,5]

narr = arr2.map((value,idx)=>{
    console.log(value,idx);
    return value*2
})
console.log(arr2);
console.log(narr);