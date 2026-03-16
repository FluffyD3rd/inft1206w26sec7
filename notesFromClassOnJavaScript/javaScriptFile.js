// JavaScript is an interperated languge so it needs an interrepter and not a compiler 

/* Java script is a lossley typed language, 

In java script we have 2 variable scopes: local scope and global scope

Function is a subprogram that can be called by external code 
Parameters are used to pass values to functions 
Functions can return a value

Functions used for envent handlers on web pages and can be called when some events occur on web page
also functions can be associated with an object to specify the behaviour of he object(a method or a member function)
IN THE WEB USE SHIFT ENTER TO MOVE TO NEXT LINE
 
2 types of functions user defined function and global function
 
function functionName(parameter1, parameter2){
    functionBody
}
*/

/*
//  simple function iteration example 
function square(n)
{
    return n*n;
}
*/

// function expression example
/*

var functionName= function(parameter1,parameter2){
functionBody
};

*/
// expression example(requires a colon at the end)
/*
var sq = function(n){
    return n*n;
};
*/

/* primitive parameters(number, string, boolean) are all passed by value to the funciton 
objects are passed by refernce to the function(WEEK10 SLIDES 8 TO 12)

In JavaScript functions are first class values, functions are objects just liek regular values and can be assigned,passed as parameters for another function

JavaScript has built in functions that are the Methods of the Window function

var a = prompt("Enter first number");
var b = prompt("enter second number");
var result = a + b;
console.log("The result is " +result);

 though this is not math it reads the numbers as strings and will return 1112 if the numbers used where 11 and 12 for the inputs
 to correct this we use the parseInt() or parseFloat() to convert to a number, if Number() is used it will try and convert whole string to a number

 isNaN() is also a funciton and is used to determine if somthing is a number 

 toFixed() shows number of digits to the right of the decimal

 any variable decalred outside the function is condisdered a global function and can be accessed anywhere in the program 
 if it is declared inside the function then it is a local variable

 In JavaScript an object is a self contained entity comprising of "properties"(variable);
 3 types of object in JavaScript Built in object(string,array,date), host object(DOM/BOM) and custom objects(objects we create)

 Math Methods are all listed on slide 29 (min result value should be 0.52 not 2) 

 String Object Methods are all listed on slide 33 
*/

console.log("Test");

function showOutput(){
    let name = document.querySelector("#first-name").value;
    document.querySelector("#output").textContent = "Hello" + name;
}

document.querySelector("btn").addEventListener("click",showOutput);