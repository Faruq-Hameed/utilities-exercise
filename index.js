const {largeNumber,cut3} = require('./src/module1');
const sumAndConcat = require('./src/module2') 

const numbers = [1,5,2,9,3,4,7]
const letters = ['a','b','c','d','e']

const results1 = largeNumber(numbers)
const results2 = cut3(numbers)
const results3 = sumAndConcat.sum(numbers);
const results4= sumAndConcat.concat(numbers, letters)


console.log(results1);//9
console.log(results2);//[ 1, 5, 9, 3, 4, 7 ]
console.log(results3);//29
console.log(results4);// [1,   5,   9,   3,   4, 7,  'a', 'b', 'c', 'd', 'e']


