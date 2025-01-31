// Task: 1. map()
// Given an array of numbers [1, 2, 3, 4, 5], use the map() method to create a new array where each number is multiplied by 10.

const mArray = [1, 2, 3, 4, 5];

console.log(mArray.map(num => num * 10));

console.log("------------------------");

// Task: 2. filter()
// Given an array of numbers [12, 5, 8, 20, 3], use the filter() method to create a new array containing only numbers greater than 10.

const fArray = [12, 5, 8, 20, 3];

console.log(fArray.filter(number => number > 10));

console.log("------------------------");

// Task: 3. forEach()
// Given an array of strings ["Hello", "World", "JavaScript"], use the forEach() method to log each string to the console in uppercase.

const stringArray = ["Hello", "World", "JavaScript"];

stringArray.forEach(str => console.log(str.toUpperCase()));

console.log("------------------------");

// Task: 4. indexOf()
// Given an array ["cat", "dog", "elephant", "tiger"], use the indexOf() method to find the index of the element "elephant".

const iArray = ["cat", "dog", "elephant", "tiger"]

console.log(iArray.indexOf("elephant"));

console.log("------------------------");

// Task: 5. findIndex()
// Given an array of numbers [7, 14, 21, 28, 35], use the findIndex() method to find the index of the first number that is divisible by 7 and greater than 20.

const findArray = [7, 14, 21, 28, 35];

console.log(findArray.findIndex(num => num % 7 === 0 && num > 20));

console.log("------------------------");

// Task: 6. includes()
// Given an array ["apple", "banana", "cherry"], use the includes() method to check if the array contains the string "banana".

const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana"));

console.log("------------------------");

// Task: 7. every()
// Given an array of numbers [10, 20, 30, 40, 50], use the every() method to check if every number in the array is greater than 5.

const eArray = [10, 20, 30, 40, 50];

console.log(eArray.every(items => items > 5));

console.log("------------------------");

// Task: 8. some()
// Given an array of numbers [3, 7, 11, 15, 19], use the some() method to check if at least one number in the array is even.

const sArray = [3, 7, 11, 15, 19];

console.log(sArray.some(item => item % 2 === 0))

console.log("------------------------");


// Task:
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the filter() method to keep only even numbers, then use the map() method to square each of those numbers.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = arr.filter(numbers => numbers % 2 === 0);

console.log(evenNum.map(square => square * square));

console.log("------------------------");