const array = [1, 2, 3, 4, 5]

// we use reduce when we want to end up with one value in the end

// we use reduce when we want to persist the return or the outcome of iterating over an element in the next iteration

console.log(array.reduce((accumulator, currentValue) => (accumulator + currentValue)))
