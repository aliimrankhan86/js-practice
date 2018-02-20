//var person = new Object(); // old method
// var person = {}; // it is literally the same as above code 
// console.log(person); // it will return you an object

var person = {
    firstname: 'Ali',
    lastname: 'Khan',
    address: {
        // address is a sub-object inside an object called person
        street: '104 Arborfield Close',
        city: 'Slough',
        county: 'Berkshire'
    }
};

console.log(person); // in console you can the complete object and if you expand then you would be able to see all its properties along the sub-object it contains.

function greet(user) {
    console.log(user.firstname + user.lastname)  
};

greet(person);


greet({
    firstname: "Nazish",
    lastname: "Khan"
});


person.address2 = {
    street: "Thurston Road" // adding more sub-objects into the person object
}


person.contact = {
    mob: 07846575221 // adding more sub-objects into the person object
}

