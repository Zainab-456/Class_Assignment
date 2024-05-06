"use strict";
// Question 1 
// Write a script to log "Hello, World!" to the console.
let message = "Hello world!";
console.log(message);
// Question 2
// Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 30;
if (temperature >= 20) {
    console.log("Temperature is cold");
}
// Question 3
// Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let applesnumbers = 10;
let givenapplesnumber = 3;
console.log(`Apples =${givenapplesnumber}`);
// Question 4 
// Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstname = "Zainab";
let lastname = "Javed";
let fullname = `${firstname} ${lastname}`;
console.log(`My fullname is ${fullname}.`);
// Question 5
// Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let number = 5;
if (number > 3) {
    console.log("yes");
}
else {
    console.log("no");
}
// Question 6
// Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
const radius = 5;
const area = calculateArea(radius);
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
// Question 7
// Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    let output = '';
    {
        if (i % 3 === 0)
            output += 'Fizz';
    }
    {
        if (i % 5 === 0)
            output += 'Buzz';
    }
    console.log(output || i);
}
// Question 8
// Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperatures = [30, 20, 35, 15, 25];
let highesttemperature = temperatures[0];
for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > highesttemperature) {
        highesttemperature = temperatures[i];
    }
}
console.log("The Highest Temperature is", highesttemperature);
// Question 9
// Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
let age = 20;
if (age <= 19) {
    console.log("They are Minor");
}
else {
    console.log("They are Adult");
}
// Question 10
// Write a function that takes an array of numbers and returns the count of positive numbers in the array.
const numberArray = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];
function countPositives(numberArray) {
    let count = 0;
    for (let num of numberArray) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
console.log("Count of positive numbers:", countPositives(numberArray));
// Question 11
// Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
const word = ["apple", "banana", "apricot", "orange", "avacado"];
const filteredwords = filteredwordsstartedwithA(word);
function filteredwordsstartedwithA(params) {
    return word.filter(word => word.toLowerCase().startsWith('a'));
}
console.log(filteredwords);
// Question 12
// Create a script that logs the second to last element of an array named fruits.
const fruits = ['Apples', 'Banana', 'Orange', 'Grapes'];
const secondtolast = fruits[fruits.length - 2];
console.log(secondtolast);
// Question 13
// Develop a function that takes an array of numbers and returns a new array with each number squared.
const numbers = [1, 2, 3, 4, 5];
const squarednumbers = squarenumbers(numbers);
function squarenumbers(params) {
    return numbers.map(number => number ** 2);
}
console.log(squarednumbers);
// Question 14
// Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
// Question 15
// Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceedsAndBelow(scores);
function countExceedsAndBelow(Scores) {
    if (scores.length === 0) {
        console.log("The array is empty.");
        return;
    }
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceedsMaxCount = 0;
    let belowMinCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            exceedsMaxCount++;
            maxScore = scores[i];
        }
        else if (scores[i] < minScore) {
            belowMinCount++;
            minScore = scores[i];
        }
    }
    console.log("Number of times the score exceeded the maximum score:", exceedsMaxCount);
    console.log("Number of times the score fell below the minimum score:", belowMinCount);
}
// Question 16
// Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
const array = [false, null, 0, "", undefined, NaN, "hello", 40];
const fillteredarray = removefalseyvalues(array);
function removefalseyvalues(params) {
    return array.filter(Boolean);
}
console.log(fillteredarray);
// Question 17
// Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const concatenatedarray = array1.concat(array2);
console.log(concatenatedarray);
// Question 18
// Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfElements(arr, type) {
    if (type !== 'even' && type !== 'odd') {
        console.log("Invalid type. Please provide 'even' or 'odd' as type.");
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((type === 'even' && arr[i] % 2 === 0) || (type === 'odd' && arr[i] % 2 !== 0)) {
            sum += arr[1];
        }
    }
    return sum;
}
console.log("Sum of even elements:", sumOfElements(numbers, 'even'));
console.log("Sum of odd elements:", sumOfElements(numbers, 'odd'));
// Question 19
// Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
const AnArray = [1, 2, 3, 4, 5];
function findelementindex(params) {
    return array.indexOf(number);
}
console.log(findelementindex(AnArray));
// Question 20
// Write a function to find and return the smallest number in an array of integers.
const Numberss = [5, 3, 9, 1, 7];
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined if array is empty
    }
    let smallest = arr[0]; // Initialize smallest to the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; // Update smallest if current element is smaller
        }
    }
    return smallest;
}
console.log(findSmallestNumber(numbers));
// Question 21
// Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
const num = [1, 2, 3, 4, 5];
function calculateProduct(numbers) {
    // If the array is empty, return 0 or throw an error, depending on the desired behavior
    if (numbers.length === 0) {
        // Here, I'll return 0.
        return 0; // You can modify this to throw an error if needed.
    }
    let product = 1;
    for (let i = 0; i < num.length; i++) {
        product *= num[i];
    }
    return product;
}
console.log(calculateProduct(num));
// Question 22
// Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
const stringArray = ["hello", "world", "yes", "no", "JavaScript", "code"];
const filteredArray = filterByLength(stringArray, 3);
function filterByLength(strings, n) {
    // Use the filter method to return a new array with strings longer than n characters
    return strings.filter(string => string.length > n);
}
console.log(filteredArray);
// Question 23
// Create a function findDuplicates that finds and logs all duplicates in an array.
// Question 24
// Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr) {
    return arr.map(num => num + 1);
}
const Num = [1, 2, 3, 4, 5];
const incrementedNum = incrementAll(num);
console.log(incrementedNum);
// Question 25
// Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr, element) {
    let count = 0;
    arr.forEach(item => {
        if (item === element) {
            count++;
        }
    });
    return count;
}
const numb = [1, 2, 3, 4, 2, 2, 5];
console.log(countOccurrences(numb, 2));
// Question 26
// Create a function isSorted that checks if an array is sorted in ascending order.
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 2, 7, 1, 9];
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted(sortedArray));
console.log(isSorted(unsortedArray));
// Question 27
// Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names) {
    if (names.length === 0) {
        return '';
    }
    else if (names.length === 1) {
        return names[0];
    }
    else {
        const formattedNames = names.slice(0, -2).join(', ') + ', ' + names.slice(-2).join(' and ');
        return formattedNames;
    }
}
const names1 = ["Alice", "Bob", "Charlie", "David"];
console.log(formatNames(names1));
const names2 = ["John"];
console.log(formatNames(names2));
const emptyArray = [];
console.log(formatNames(emptyArray));
// Question 28
// Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
const temperaturesFahrenheit = [32, 68, 86, 104, 212];
function convertFahrenheitToCelsius(temperaturesFahrenheit) {
    const temperaturesCelsius = temperaturesFahrenheit.map(tempF => (tempF - 32) * (5 / 9));
    console.log("Fahrenheit Temperatures:", temperaturesFahrenheit);
    console.log("Celsius Temperatures:", temperaturesCelsius);
}
convertFahrenheitToCelsius(temperaturesFahrenheit);
// Question 29
// Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(numbers) {
    if (numbers.length === 0) {
        return {
            min: undefined,
            max: undefined,
            average: undefined
        };
    }
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    return {
        min,
        max,
        average
    };
}
const Numb = [10, 5, 20, 15, 30];
const result = minMaxAverage(Numb);
console.log(result);
// Question 30
// Create a function swapElements that swaps two specified indices in an array.
function swapElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.log("Invalid indices. Indices must be within the range of the array.");
        return;
    }
    if (true) {
        const temp = arr[index1];
        arr: String || [index1];
        arr[index2];
        arr: String || [index2];
        temp;
        return arr;
    }
}
const Array1 = [1, 2, 3, 4, 5];
console.log(swapElements(array, 1, 3)); // Output: [1, 4, 3, 2, 5] (Elements at indices 1 and 3 are swapped)
// Question 31
// Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countoccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
const str = "hello, world";
const char = "l";
console.log(countoccurrences(str, char));
// Question 32
// Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
const todoList = [
    { task: 'Learn JavaScript', completed: true },
    { task: 'Write code', completed: false },
    { task: 'Read a book', completed: false },
    { task: 'Exercise', completed: true }
];
function logIncompleteTasks(todoList) {
    console.log("Tasks not yet completed:");
    todoList.forEach(item => {
        if (!item.completed) {
            console.log(item.task);
        }
    });
}
logIncompleteTasks(todoList);
// Question 33
// Write a function that takes an array of integers and sorts them from smallest to largest.
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(unsortedNumbers);
console.log(sortedNumbers);
// Question 34
// Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function logArrayReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
const Array2 = [1, 2, 3, 4, 5];
logArrayReverse(Array2);
// Question 35
// Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 !== 0) {
                return operand1 / operand2;
            }
            else {
                return "Error: Division by zero";
            }
        default:
            return "Error: Invalid operator";
    }
}
// Function to prompt the user and validate input
function getUserInput(promptMessage) {
    let userInput;
    do {
        userInput = parseFloat(promptMessage);
    } while (isNaN(userInput));
    return userInput;
}
// Get operands and operator from the user
const operand1 = getUserInput("Enter the first operand:");
const operand2 = getUserInput("Enter the second operand:");
const operator = prompt("Enter the operator (+, -, *, /):");
// Calculate and log the result
const Result = calculate(operand1, operand2, operator);
console.log(`Result: ${Result}`);
function forEach(arg0) {
    throw new Error("Function not implemented.");
}
