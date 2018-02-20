function greet() {
    console.log('Hi');
}

greet.language = 'English'; /* Look we added a property to a function, which is an object */

console.log(greet); // this will only display the string of the function / object.

/* Instead if we console.log the property inside greet function object, it will display the result */

console.log('the property added inside the function object is called ' + '= ' + greet.language);
