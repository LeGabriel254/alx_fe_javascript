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
// 
// 

 function sumArray() {
  let sum = 0;
  let numbers = [1,2,3,4,5,6,7]
  for(let value of numbers) {
      sum += value
      console.log(`${value}, ${sum}`)
  }
 console.log(`${sum}`)
}

sumArray()


// const para =  document.getElementById('greatings')

// para.textContent= `Leon`

const button = document.getElementById('click')

button.addEventListener('click',function() {
    button.textContent = "Clicked!";

//  // Use an if statement to check the current text content of the button
//  if (button.textContent === "Click Me") {
//     // Change the text to "Clicked!" if it is currently "Click Me"
//     button.textContent = "Clicked!";
//   } else {
//     // Change the text back to "Click Me" if it was "Clicked!"
//     button.textContent = "Click Me";
//   }
})



const listItems = document.querySelectorAll(".hover-item");
z

// Loop through each list item and add event listeners for "mouseover" and "mouseout"
listItems.forEach(item => {
  // Attach "mouseover" event listener
  item.addEventListener("mouseover", function() {
    // Change the background color when the mouse is over the item
    item.style.backgroundColor = "#f0f0f0"; // Light gray background
  });

  // Attach "mouseout" event listener
  item.addEventListener("mouseout", function() {
    // Reset the background color when the mouse is out of the item
    item.style.backgroundColor = ""; // Reset to original background
  });
});