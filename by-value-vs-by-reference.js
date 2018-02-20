/**** By Value ****/

var a = 3;
var b;

/* If it is a primitive value then it copies the primitive value and assign it into a new location into the memory */

b = a;
a = 2;

console.log(a);
console.log(b);

/**** By Reference ****/

/* if you create an object and then have it equal to another variable then both the variables points towards the same memory address */

var c = {
    greeting: 'hi'
}

var d;

console.log(c);

d = c;

c.greeting = 'Hello'; // Mutate meaning change 

console.log(c); /* it does not matter whichever variable you call they both are just an alias to a memory location */
console.log(d);

/* They both are pointing towards the same memory location, when we are using objects - this is called by reference. */


/* By Reference - even as parameter */

function changeGreetings(obj) {
    obj.greeting = "Hola";
}

changeGreetings(d);

console.log(c);
console.log(d);



/* Equals operator sets up new memory space (new memory address) */

c = {
    greeting: "Howdy"
}

console.log(c);
console.log(d);


/* All primitive values are works by value &
All objects (including functions) are by reference. */


