/* 4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing */



var x = 56;
var y = 2;
var z = x/y;
console.log(z);

let a = 56;
let b = 2;
let c = a/b;
console.log(c);

/* The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.*/


const amount =34343;
const add = 3434;
let total = amount + add;
console.log(total);
/* These are constant values and cannot be changed.

The variable total is declared with the let keyword.

This is a value that can be changed.*/

var name = "Elon";
var name ;
console.log(name); // we can re decleare a var


/*
not possible with let
let person = Elon ;
let person; 
*/
  let $ = 800 ;
  let $$ = 900 ;
  let myMoney$$ = 1000;

  /* Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.( syntax error)
Variables defined with let have Block Scope. */


/* 
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

*/

{
    
    let tag = 35;
} // tag cannot be used outside
//tag += 100 ;
//console.log(tag);

{ var dis =79}
var dd = dis +100;
console.log(dd);



let pop = 56 ;
console.log(pop); // here it 56
{
    let pop =10;
    console.log(pop); //here it is 10
}
console.log(pop); // here again 56

// BUT

var king = 100;
console.log(king); // here 100
{
    var king =10 ;
    console.log(king); // here 10
}
console.log(king); // here 10

// var is not having block scope 

// let username = window.prompt("enter your username");
// console.log(username);

// getting user input
function getInput(){
    let inputVal = document.getElementById("mytext").value;

    console.log(inputVal);

  
    document.getElementById("p1").innerHTML = "Hello " + inputVal ;
}


// programm for CalculaTING Hypotenous 

function getResult(){

    let side1 = document.getElementById("side1").value;
    side1 = Number(side1);

    let side2 = document.getElementById("side2").value;
    side2 = Number(side2);

    let res = Math.sqrt(Math.pow(side1 , 2)+Math.pow(side2 , 2));

    document.getElementById("result").innerHTML = res ;
}