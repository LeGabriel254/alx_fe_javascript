// let element = document.createElement('p')
// element.textContent = 'Its me Leon'
// document.body.appendChild(element)// show into the document

// document.getElementById('pyr').textContent = 'Hello World'
// var age = prompt('How old are you');
// var name = prompt("Whats your name")

// // // Get the current year using new Date().getFullYear()
// let currentYear = new Date().getFullYear();

// // // Calculate the year of birth by subtracting userAge from the current year
// let yearOfBirth = currentYear - userAge;

// // // Display the result to the user using an alert
// alert(`Hello, ${userName}! You were born in the year ${yearOfBirth}.`);

// // //  // arrays and objects

// // //if statement
// function flatten(array) {
//   const result = []
//   function flattenHelp(nestArry) {
//     for (let i = 0; i < nestArry.length; i++) {
//       if (Array.isArray(nestArry[i])) {
//         flattenHelp(nestArry[i]);
//       } else {
//         result.push(nestArry[i]);
//       }
//     }

//   }
//   flattenHelp(array);
//   return result;
// }

// const nestArry = [[1, 2, [3]], 4];
// const result = flatten(nestArry);

// console.log(result);
function go_to_google() {
if ( confirm('Go to Google?') ) {
  document.location = 
 'http://www.google.com/';
 }
}