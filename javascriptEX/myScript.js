
// wecan either write ; ot end the statement

// this is method to diaplay on console:
console.log("welcome to ProjectSoulCode");
console.log('efefefe');
console.log(765487547);
console.log(23+423);
console.log("hi "+"its "+"getting "+"interesting ");
console.log("this is first line \n" +"second line");


/* JavaScript can "display" data in different ways:
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

//window.alert("lets go!!");
//alert("window keyword is global object!!!")


// This statement tells the browser to write "3+1=4." inside an HTML element with id="add":
document.getElementById("add").innerHTML = "3+1=4";

document.write("hell yeah!!");


//to print the contect of current window we have
//window.print();

// syntax

var a;
var b;

a = 4; //use spaces around operators
b = 7;

let c = a + b;
console.log(c);

/* The JavaScript syntax defines two types of values:

Fixed values
Variable values
Fixed values are called Literals.

Variable values are called Variables.

*/
// variables var, let and const
/* 
The let keyword tells the browser to create variables:
The var keyword also tells the browser to create variables:
var or let will produce the same result.
*/

/* 
A JavaScript name must begin with:

A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)

All JavaScript identifiers are case sensitive.

first-name, last-name, master-card, inter-city.
Hyphens are not allowed in JavaScript. They are reserved for subtractions.

JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity.

JavaScript uses the Unicode character set.

Unicode covers (almost) all the characters, punctuations, and symbols in the world.
*/