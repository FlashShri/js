
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] ;

let arrLength = arr.length ;
// console.log(arrLength);
// console.log(arr);

// console.log(arr.slice());
// console.log(arr.slice(1, 4));

// console.log(arr);

//console.log(arr.splice(3 ,6 ));
//console.log(arr.splice(1 ,0 ,44));

const cars = [ "Tesla", "Tata", "MAhindra", "Hyundai", "BMW"];

cars.splice(0 ,0 , "Bugatti");
cars.splice(3 ,1 , "Suzuki");
console.log(cars);

cars.push("kk");
console.log(cars);

// var x ; // declareing the vbarible

// x = 5 ; // assing a vaue to varianle

// //let y = 5 ; // we can assing this way also
// const z = 10 ; 

// var a = 4 ;
// var b = 2 ;

// console.log(a*b); // here a*b will be 8

// {
//   var a = 6 ;
//   console.log(a*b); // here a*b will be 12
// }

// console.log(a*b); // here a*b will be 12

let a = 4 ;
let b = 2 ;

console.log(a*b); // here a*b will be 8

{
  let a = 6 ;  // this redeclared varible has only block scope
  console.log(a*b); // here a*b will be 12
}

console.log(a*b); // here a*b will be 8
