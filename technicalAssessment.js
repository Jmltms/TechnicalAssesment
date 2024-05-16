// CHALLENGE INSTRUCTIONS

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

// IMPORTANT REMINDER:

// Please note that you will need to create a public repository in GitHub and upload it on your GitHub profile.
// Once done, please inform the hiring assistant about your progress for our hiring lead to check the code.

// Example:

// var array_of_numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

// console.log(getPositives(array_of_numbers)) //should return: [10,12,5,90,0,1]

// ==================================================================================================

// // BOILERPLATE CODE

/// I used the forEach method to make my code simple and straight forward.
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 = [];

arr.forEach((val) => {
  if (val < 0) {
    const positiveInt = val * -1;
    arr2.push(positiveInt);
  } else {
    arr2.push(val);
  }
});

console.log(arr2);

// function getPositives(arr)
// {
//     //your code goes here
// }

// var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var arr2 = getPositives(arr);
// console.log(arr2); //should return: [10,12,5,90,0,1]

///// assessment number 2
// CHALLENGE INSTRUCTIONS

// Create a function that will accept an array of numbers in order to calculate the average of the array of numbers.

// IMPORTANT REMINDER:

// Please note that you will need to create a public repository in GitHub and upload it on your GitHub profile.
// Once done, please inform the hiring assistant about your progress for our hiring lead to check the code.

// Example:

// var array_of_numbers = [1, 3, 9, 15, 90];

// console.log(averageArray(array_of_numbers)) //should return: Average: 23.6

// ==================================================================================================

// // BOILERPLATE CODE
// again I used the forEach method to answer this question with few lines of code
let array_of_numbers = [1, 3, 9, 15, 90];
let sum = 0;
let average;

array_of_numbers.forEach((val) => (sum += val));
average = sum / array_of_numbers.length;

console.log("Average: " + average);

// function averageArray(arr) {
//     let n = arr.length;
//     let sum = 0;
//     let average;

// 	//your code goes here

//     return average
// }

// let array_of_numbers = [1, 3, 9, 15, 90];
// let avg = averageArray(array_of_numbers);

// console.log(("Average: ", avg));  //should return: Average: 23.6

//assessment number 3
// CHALLENGE INSTRUCTIONS

// Create a function that will accept an array of numbers that will calculate and return their sum.

// IMPORTANT REMINDER:

// Please note that you will need to create a public repository in GitHub and upload it on your GitHub profile.
// Once done, please inform the hiring assistant about your progress for our hiring lead to check the code.

// Example:

// var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];

// console.log(sumArray(array_of_numbers)) //should return the sum of 145

// ==================================================================================================

// // BOILERPLATE CODE
let arrayOfNumbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sums = 0;

arrayOfNumbers.forEach((val) => (sum += val));
console.log(sums);

// function sumArray(arr) {
//     var sum = 0;

//     //your conde goes here

//     return sum;
// }

// var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// var sum = sumArray(array_of_numbers);
// console.log(sum);
//should return the sum of 145
