// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// Then we create a conditional.
// We check if 'Dane' is a true exact match to 'Mary' if so we console.log 'Hi, Mary!'
// Else if not true, then we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a secret variable and set it to undefined and then we create a code variable and set it to 123 as a number.
// Then we create a if conditional.
// If code variable is exact match to 123 then secret is set to 'super' and code is multiplied by 2. Making it 246.
// Then if code is greater than 250 IT IS NOT secret is set to 'duper'. So secret is still 'super'.
// We console.log secret which reads as 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create the varaibles isStudent set to true, age set to 34 number, and zip set
// to 55407 number. Then we create if, else if conditional.
// If isStudent is exact match to true and zip is greater than 80000 then console.log 'You're a student on the West Coast!'
// Else if isStudent is flase or age is less than 30 then console.log 'What are your hobbies?'
// Then else if isStudent is true then console.log 'Welcome to Prime!' Else will console.log 'How about the weather?'
//The console.log will read as 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to 'blue' and colorTwo to 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - Both colorOne and colorTwo need to be set to the string 'purple'
// add colorTwo = 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX - Instructions say temp is greater than 39 and time is greater or equal to 4. 
// the two || means or it should be &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - The code needs to switch the console.logs around. It shoudl be :
//if(minAge <= age) {
//  console.log('enter');
//} else {
//  console.log('no entry');
//}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

