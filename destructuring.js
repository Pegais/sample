//destructring in array;
// let arr = ["hii","i","am","Snehal"];
// //  let[a,b,c,d]= arr;
// // console.log(a)

// // how to skip values ina array
// let [a,,c,d,surname="Mishra"]=arr;
// console.log(a,c,d,surname)


// // constraint --- call by key.
// let obj ={
//     name:"Snehal",
//     age:21,
//     state:"Up"

// }
// let {name,age,state}=obj;
// console.log("name is :",name);

// //nested object

let obj11 ={
    name:"Snehal",
    add:{
        country:"India",
        state:{
            code:"ok",
            pin:12345
        }
    }
}
let {name}=obj11;
console.log("name is :",name);
let{add:{country}}=obj11;
console.log("country is :",country);
let {add:{state:{code,pin}}}=obj11;
console.log("code,pin :",code,pin);