//Json is inspired by JavaScript object notation

var objectLiteral = {
    firstnaem: "Ali",
    isAProgrammer: true
}

console.log(objectLiteral); // A simple JavaScript object

// In previous years, the data was sent in various formats - back in the days the format which was popular was XML but due to additional tag inside brackets i.e. <firstname>Mary</firstname> thus when they saw how JavaScript deals with object lierals they got inspired and decided to use similiar format to be used across the internet.

// Due to extra character being used and also the speedy response against a larger file because of more character being used by XML. it  was became slightly unpopular.

/*

<object>
    <firstname>Mary</firstname>
    <isAProgrammer>true</isAProgrammer>
</object>

As you can in the above XML example has too many characters were used, which makes filesize becomes bloated

*/


/* Then Programmers looked at JavaScript object literal and thought it would be a good option to use something similiar like object literal to send data across the internet for example

    {
        firstname: 'Ali',
        isAProgrammer: true
    }

    There are minor difference between JSON & JavaScript such as the property name has to be inside double quotes i.e. in JSON "firstname" : "Ali" and in JavaScript object literal way firstname : 'Ali'.  The above example is a valid JSON syntax.
    
    JSON is technically a subset of Object literal meaning that anything that is JSON valid is also valid JavaScript object literal syntax but not all JavaScript object literal syntax is valid JSON. JSON has stricter rule about what it could be.
    
    JSON is not really a apart of JavaScript but due to its popular & easy for JavaScript to understand what it is. JavaScript comes with some built-in functionality to transfer between the two.
    
*/


console.log('this is converting JavaScript object into JSON string ' + JSON.stringify(objectLiteral));

// In the above line as you can see that JavaScript converted the object into a JSON string

// Now if you want to convert a JSON string into JavaScript object then you can parse JSON.parse (the string).


var jsonValue = JSON.parse('{"firstname": "Ali", "isAProgrammer": true}');

console.log('here we converted a string which has JSON syntax into a JavaScript object ' + jsonValue);
