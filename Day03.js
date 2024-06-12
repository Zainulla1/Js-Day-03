// Exercise 01

// write  a JS program to find the number of even 
//digits in an array of integers

// const countEventNumbers = (arr) =>
//     arr.filter(num => num % 2 === 0).length;

// console.log(countEventNumbers([1,2,3,4,5,6]));
// console.log(countEventNumbers([2,2,2,2,2,2,]));
// console.log(countEventNumbers([3,5,7,9,10,100]));

//Exercise 02

//Using JS find the Number of even values up to
// a given number

const countEvenNumbers = (arr) =>
    arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for (let i = 1; i <= num; i += 1) {
        returnArray.push(i);
    }
    return returnArray;
};

console.log(countEvenNumbers(createArrayOfNumbers(6)));
console.log(countEvenNumbers(createArrayOfNumbers(9)));

//Exercise 03
//using JS check wheather a given array of integers
// is  sorted in ascending order

const isAscending  = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending([1,2,3,4,5,6]));
console.log(isAscending([1,2,5,4,3,6]));
console.log(isAscending([1,2,3,4,5,6]));

//Exercise 04
//Using JS get largest even number from an array
//of integers.

const largestEvent = (arr) =>
     Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEvent([1,2,3,4,5,6]));
console.log(largestEvent([1,2,33,4,5,6]));
console.log(largestEvent([1,2,3,44,55,6]));
