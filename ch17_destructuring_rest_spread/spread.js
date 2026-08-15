/* spread operators 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged =[... arr1,... arr2];
console.log (merged);[1 ,2,3,4,5,6]

let numb = [10, 20, 30];
let copy = [10, 20, 30]
let copy = [... numb]; 
console.log(copy); */
/* 
let user = { name: "Hinda", age: 20};
let details = {country: "Somalia"};
let profile = { ... user, ...details};
console.log (profile); */

function multiply (x , y) {
    return x * y 

}
let numbers = [3,5];
/* let result = multiply (3, 5); */
let result = multiply (...numbers)
console.log (result);