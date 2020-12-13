//My age
// let myAge = prompt('Enter Your Age:');

//The value of early years will be changed
// let earlyYears = 2;

// earlyYears *= 10.5;

// //The value of later years will be changed
// laterYears = myAge - 2;

// laterYears *= 4;


// //This calculates age in dog years
// myAgeInDogYears = earlyYears + laterYears;

// //This makes my name all lowercase letters
myName = prompt('Enter Your Name:').toLowerCase();


//This is the statement shows both my name, my human age, and dog age years..
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

myDogAge = prompt('Enter Your Dog Age:');

myHumanAge = (myDogAge - 21)/4 + 2;

console.log(`My name is ${myName}. I am ${myDogAge} dog years old. My human age is ${myHumanAge}.`)




