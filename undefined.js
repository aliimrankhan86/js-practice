console.log(a);

/* it will return undefined because up til this point the parser hasnt read var a. However in the creating phase of the execution content
it has allocated a memoery space for it. When the parser gets there line by line then it will assign the value to it.
*/


var a;

// console.log will show var a is undefined because of the parser hasnt got there but it recongnises that var a exist.


if (a === undefined) {
    console.log('var a is undefined');
}

else {
    console.log('var a is defined');
}

// if we dont define var a at all then it will prompt us var a is not defined
