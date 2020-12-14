//toLowerCase() change all letters to lower case
let myName = prompt('Enter your name: ').toUpperCase();

// Define a variable to assign my age
let myAge = prompt('Enter your human age: ');

// This will change
let earlyYears = 2;

earlyYears *= 10.5;

//lateryears shows the number of years after early years
laterYears = myAge - 2;

//convertion to dog years of later years of human age
laterYears *= 4;

//check if it works so far
console.log(earlyYears, laterYears);

//sum of early years and later years
let myAgeInDogYears = earlyYears + laterYears;

alert(
	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`,
);

let dogAge = prompt('Enter your dog age: ');

let myAgeinHumanYears = (dogAge - 21) / 4 + 2;

alert(
	`My name is ${myName}. I am ${dogAge} years old in dog years. My human age is ${myAgeinHumanYears} in human years.`,
);
