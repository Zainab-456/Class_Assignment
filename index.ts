//Question 1 
let message="Hello world!";
console.log(message);
//Question 2
let temperature=30;
if (temperature>=20)
{
    console.log("Temperature is cold");
}
//Question 3
let applesnumbers=10;
let givenapplesnumber=3;
console.log(`Apples =${givenapplesnumber}`);
//Question 4 
let firstname="Zainab";
let lastname="Javed";
let fullname=`${firstname} ${lastname}`;
console.log(fullname);
//Question 5
let number=5;
if(number>3){
    console.log("yes");
}else{
    console.log("no");
}
//Question 6
const radius = 5;
const area = calculateArea(radius);
function calculateArea(radius: number){
    return Math.PI * radius * radius;
}
console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
//Question 7
for (let i = 1;i <= 50;i++){
    let output ='';{
    if (i % 3===0) output += 'Fizz';
} {if (i % 5===0) output  +='Buzz';
} console.log(output || i);
}
//Question 8
const temperatures=[30,20,35,15,25];
let highesttemperature=temperatures[0];
for (let i=1;i< temperatures.length;i++){
    if (temperatures[i]>highesttemperature){
        highesttemperature=temperatures[i];
    }
}
console.log("The Highest Temperature is",highesttemperature);
//Question 9
let age=20;
if (age<=19) {
    console.log("They are Minor");
} else {
    console.log("They are Adult");
}
//Question 10
const numberArray=[1,2,3,4,5,-6,-7,-8,0,100];
function countPositives(numberArray: number[]) {
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