/* Array Methods Exercises */    

// 1> Write a JavaScript function to check whether an `input` is an array or not.*/

var arr = [1,2,3,4,5]
var arr2 = (1,2,3,4,5)
// var arr3 = {1,2,3,4,5} syntax error


function checkArray(type1, type2) {
    for (i=0; i<arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            console.log(arguments[i], 'It is an Array');
        }
        
        else {
            console.log('not an array')
        }
    }
}

checkArray(arr, arr2);





// 2> Create an array from given elements

var arr = (1,2,3,4,5);


arr = Array.of(arr);
            
console.log(arr);





// 3> Merge following array into one array

var arr = [1,2,3]
var arr2 = [4,5]
var arr3 = [6,7,8,9]

arr = [...arr, ...arr2, ...arr3];

console.log('used es6 for joining arrays ', arr);

arr = arr.concat(arr2).concat(arr3)

console.log('old js concat ', arr)






// 4> From the following array if all items in an array greater than 40 then return true else false

var arr = [50,74,05,85,69,22]
var arr2 = [55,52,57,95,75,41]

var g1 = true;
var g2 = true;


arr.forEach(function(element) {
  if(element < 40) {
    g1 = false
  }
});

arr2.forEach(function(element) {
  if(element < 40) {
    g2 = false
  }
});



console.log('g1 is now ', g1);

console.log('g2 is now ', g2)









// 5> From the given array give me details of critical patient only

var patientData = [
  {
    name: 'Mr. Kalam',
    age:26,
    condition:'critical'
  },
  {
    name: 'Mr. Oza',
    age:26,
    condition:'normal'
  },
  {
    name: 'Mrs. Sharma',
    age:26,
    condition:'abnormal'
  },
  {
    name: 'Ms. Patel',
    age:26,
    condition:'critical'
  },
  {
    name: 'Mr. Trivedi',
    age:26,
    condition:'normal'
  }
]

var critical = patientData.filter(p => p.condition === 'critical')

console.log(critical)





// 6> Flat the following array

var arr = [1,2,[3,4]]
var arr2 = [1,2,3,[4,5,[6,7]]]
var arr3 = [1,2,3,[4,5,[6,7,[8,9]]]]



var flatArr = arr.flat(1);
var flatArr2 = arr2.flat(2);
var flatArr3 = arr3.flat(3);

console.log('1 level Flat Array', flatArr);
console.log('2 level Flat Array', flatArr2);
console.log('3 level Flat Array', flatArr3);




// 7> From the following array find if key present in array or not (retrn true or false)

var arr = [1,2,3,4,5];  // key = 3
var fruits = ['apple','mango','banana','grapes','guava']; // key = 'cherry'

console.log('Arr has the key 3 ' , arr.includes(3));

console.log('Array index of ', arr.indexOf(3) > -1 ? true : false);

console.log('fruits has the key cherry ' , fruits.includes('cherry'));


            

// // 8> Convert following array to strings

var fruits = ['apple','mango','banana','grapes','guava']
// output --> 'apple-mango-banana-grapes-guava'

console.log(fruits.join('-'))



// 9> Form array from the string
var str = 'apple-mango-banana-grapes-guava'
// output --> ['apple','mango','banana','grapes','guava']

console.log(str.split('-'))


// 10> find square root of following array items and make a new array
 var arr = [1,4,9,16,25];
// output --> [1,2,3,4,5]
 
var sq = arr.map(n => {
  return Math.sqrt(n);
})

console.log('square root is ', sq);



// 11> find last elements from an array

var fruits = ['apple','mango','banana','grapes','guava']
// // output --> guava

var lastfruit = fruits[fruits.length - 1];

console.log(lastfruit);



// 12> Add element at last of array
var fruits = ['apple','mango','banana','grapes','guava'];
// add 'cherry'

fruits.push('cherry');

console.log(fruits)


// 13> Add elements at start of an array

var fruits = ['apple','mango','banana','grapes','guava']

// add 'Strawberry'

fruits.unshift('Strawberry')

console.log(fruits)




// 14> Reverse following arrays

var arr = [1,2,3]
var arr2 = [4,5]
var arr3 = [6,7,8,9]

arr = [...arr, ...arr2, ...arr3];

arr = arr.reverse();

console.log(arr)




// 15> Remove first elememts from an array
var fruits = ['apple','mango','banana','grapes','guava']

fruits.shift();

console.log(fruits)



// 16> Return specific element from array
var fruits = ['apple','mango','banana','grapes','guava']
// output --> ['mango','banana','grapes']

fruits = fruits.slice(1,4)
console.log(fruits)






// 17> Sort (Ascending) the following array
var arr2 = [55,52,57,95,75,41]


arr2 = arr2.sort(); // ascending
arr2 = arr2.sort((a,b) => b - a); // decending

console.log(arr2)


