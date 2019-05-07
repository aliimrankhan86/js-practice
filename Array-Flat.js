const masterArray = [[1,2],3,[4,5]];

// es6 Solution
masterArray.flat();

// es5 solution

const inOrder = [];

const myOrder = masterArray.map(ia => {
  if (typeof(ia) === "object") {
    ia.map(iv => inOrder.push(iv))
  }
  else {
    inOrder.push(ia)
  }
})

console.log(inOrder);
