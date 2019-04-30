/* Remember: Promise Object is result of a constructor function
resolve & reject are the arguments that comes with Promise Object */


var Extension = new Promise((resolve, reject) => {
	reject('Not done, Screw you')
  /* Whatever method you use here, will be used as the result of your promise but remember it only takes the first result. */
});




Extension.then(
	result => alert(result),
  refuse =? alert(refuse)
  /* We have consumers i.e. then, catch & finally. Then consumer is the most important one. If I use resolve method above in the promise 
  then the first argument function of 'then consumer' will resolve it witht the message and if I use the reject method then the 
  second argument function will result in rejecting the promise */
)
.catch(
	refuse => alert(new Error('It is a big NO No!!!'))
  /* Normally, we use catch consumer for showing any error messages in the promise */
)


/* References taken from - https://javascript.info/promise-basics */
