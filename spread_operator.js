// let arr =[1,2,3,4]

// let arr2=[...arr];
// arr2.push(5);
// console.log(arr);
// console.log(...arr2)
// ///t
// // o resolve the value of both use spread operator.
// // l
// let arr3 =[...arr2];
// arr3.push(6)
// console.log(arr3)


//// how spread works in object;
let obj ={
    name:"snehal",
    age :21,
    add:{
        state:"up",
        pin:121345
    }
}
let obj1 =obj;
obj1.name ="vinay";
console.log("first object = ",obj);
console.log(obj1);
let obj2 ={...obj,add:{...obj.add}};
obj2.name="snehal";
obj2.add.state="MAHarastra";
console.log(obj);
console.log(obj2);
