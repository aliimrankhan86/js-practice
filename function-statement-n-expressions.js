var a;
//console.log(a);

a = 3; // that unit or a line of code results - remmeber equal is an operator A function that takes two values does some work and return a value. So now when we run this, it will return us 3.

/* We can run a different expression for example */

/* 1 + 2; - The expression evaluated to add the 2 value and return the result */

/* this is a valid expression and the plus sign takes two values and adds them then returns the result. I didn't do anything to the value. But in both case this is an expression because it returned a value. In the other words the line of code the resutls a value */

/* The value could be a string, Number, Boolean or an object, Whatever the case. But still ends up being a value */

/* Example - Try it in the console */

var a = {
    greeting: 'Hi'
};


/* it will still work the same way. it will put the object into the memory and the equal operator returns a value */

/* Answer - Object {greeting: "hi"} */



/* Java Script Statements */

/* If we use something like an If statement */

if ( a === 3) {
    /* we would always use an expression i.e. triple equals === because it would result in return */
    /* The if statement itself is just a statement  and inside we use an expression === because the expression returns a value ultimately true or false */
    
}


/* Example of Statment & Expression */

function greet() {
    console.log('hi');
}

/* inside the function greet, we have a statment - console.log('hi') */


var anonymousGreet = function() {
    console.log('hi');
};  


/* here is a classical example of expression because it would result a value  */

/* Here we are assiging the function object to variable called anonymousGreet, In the memory space the function inside anonymousGreet is an anonymous function because it doesn't have a name, All javascript knows this function object is inside the variable and the function name property is empty. It is ok because we can reference the function object to a variable name. Inside this function object we have the same code property = console.log('hi'); */


/* So how do we invoke this function ? */

/* We need to point it the object and then tell it to run it's code */

anonymousGreet(); /* the variable is already pointing to where it lives and the parenthesis invoke the code */


/* test(); if you invoke function test now, then it will not display the result because of Hoisting - Remember Global Execution Context */

var test = function() {
    console.log('pass');  
}

test();




/* Now create a function with a parameter and console.log the value you give on the fly */

function log(a) {
    console.log(a);
    //a(); this line is only going to if you pass a function dynamically to the parameter.
}

log(3); // Number value assigned to parameter A.
log('Hello'); // String value assigned to parameter A.
log ({
    greeting: 'Hello World' /* Object has been passed in the parameter A. */
});


log(function() {
    console.log('Hi Function is in parameter now');
});


/* In other words, we can pass a function inside a function's parameter */

/* inside the log function parameter is being passsed a function when we are invoking the log function. Then the dynamic function value has been assigned in the memory space of log function. Now, if we want to invoke the dynamic function inside log function then simply
a(); inside the log function should do it. */


/******* FIRST CLASS FUNCTION - CREATED ON THE FLY & CAN VE REUSED ******/
/******* FUNCTIONAL PROGRAMMING ********/


function mytest(a) {
    //console.log(a);
    a();
}

mytest(function() {
    console.log('First Class function');
});






