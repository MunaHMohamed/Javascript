/* function add (... numbers){
    return numbers.reduce((sum,n )=> sum +n, 0)

}
console.log(add(1,2, 3))
console.log(add(5,10,15,20)); */
/* 
example 2  */

function add(num1, num2, ...numbers){
    console.log(num1);
    console.log(num2);
    console.log(numbers);
   };
    

add (1, 2, 3, 4, 5, 8, 20, 50);