var person = new Object;
person["firstName"] = "Ali";
person["lastName"] = "Khan";

console.log(person["firstName"]);
console.log(person["lastName"]);


person.address = new Object();
person.address.street = "104 Arbofield Close";
person.address.county = "Berkshire";
person.address.city = "Slough";


console.log('My address is');
console.log(person.address.street);
console.log(person.address.county);
console.log(person["address"]["city"]); // Old method of working with objects but left here for reference.
