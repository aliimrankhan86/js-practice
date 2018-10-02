console.log('ES6 Spreads example starts here!');
var onetofive = [1,2,3,4,5];
var numbers = [...onetofive];
console.log(numbers);


var sixtoten = [6,7,8,9,10];
var total = [...onetofive, ...sixtoten];
console.log(total)

var problemwithoutspreads = [10, 04, 21, 27, onetofive, 88, 86];
console.log('Problem', problemwithoutspreads); 

var solvedwithspreads = [10, 04, 21, 27, ...onetofive, 88, 86];
console.log('Solved', solvedwithspreads);


console.log('ES6 Spreads example for strings');
var greetings = "hello";
var chars = [...greetings];
console.log(chars);

console.log('For revision on spreads', 'https://codeburst.io/javascript-the-spread-operator-a867a71668ca');


