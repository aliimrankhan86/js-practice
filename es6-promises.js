let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Success'), 1000);
	setTimeout(() => reject('UH Oh Error'), 500)
});

myPromise.then((res) => {
		console.log('Response is ', res);
})
.catch((err) => {
	console.log('Error is', err)
})
