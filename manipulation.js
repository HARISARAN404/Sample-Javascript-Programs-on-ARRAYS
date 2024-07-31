let fruits = ['apple', 'banana'];

fruits.push('orange', 'mango');

console.log(fruits);

fruits.unshift('apple', 'mango');

console.log(fruits);

let lastFruit = fruits.pop();

console.log(fruits); 
console.log(lastFruit); 

let firstFruit = fruits.shift();

console.log(fruits);
console.log(firstFruit);

let removed = fruits.splice(1, 1);
console.log(fruits);
console.log(removed);
fruits.splice(1, 0, 'kiwi', 'mango');
console.log(fruits); 
fruits.splice(2, 1, 'grapes');
console.log(fruits); 

let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'mango'];

let allFruits = fruits1.concat(fruits2);

console.log(allFruits);

let citrus = fruits.slice(1, 3);

console.log(citrus);
console.log(fruits); 