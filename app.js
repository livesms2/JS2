// Problem # 1
/*var arr = [] //One D array
var arr = [][] // Two D array
*/
// Problem # 2

/*let arr = [];
let rows = 3;
let columns = 4;

// creating two-dimensional array
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);*/

// Problem # 3 Write a program to print numeric counting from 1 to 10.

/*let arr = [];
let columns = 10;

// creating two-dimensional array
for (let i = 1; i <= columns; i++) {
  arr[i] = [];
  
  }
console.log(arr);*/


// Problem # 4
/*const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);

}*/

//Problem 5. Write a program to print items of the following array using for loop:

/*var fruits = [apple, banana, mango, orange, Guava]

//fill the array
fruits[0] = "Apple";
fruits[1] = "Orage";
fruits[2] = "Mango";
fruits[3] = "Banana";
fruits[4] = "Guava";

console.log(results);*/

// 6. Generate the following series in your browser. Seeexample output.

// Reverse


/*var raw = 15;
for (var a = 1; a <= raw; a++) {
  console.log(a);
  }*/

 
   /* let number = 123456789;

     // Initializing the result variable 
    let result = 0;
    
    while(number>0){
        // Getting the rightmost digit
        rightmost = number%10;
        
        result = result*10 + rightmost;
        
        // Removing the rightmost digit from the number
        number = Math.floor(number/10);
    }
    console.log("Reversed number is : " + result)
*/

// Even Number
/*for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}*/
  

// Odd Number
/*for (let i = 3; i <= 20; i += 2) {
  console.log(i);
}*/

//  Number
/*for (let i = 3; i <= 20; i += 2) {
  console.log(i);
}*/

/*for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}*/

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array

// Given array
/*var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item
function searchItem() {
  var userInput = prompt("Enter an item to search for:"); // Prompt the user for input
  var itemFound = false; // Flag to track if the item is found

  // Loop through the array to check if the item exists
  for (var i = 0; i < A.length; i++) {
    if (userInput.toLowerCase() === A[i].toLowerCase()) {
      itemFound = true;
      break; // Exit the loop if the item is found
    }
  }

  // Display a message based on whether the item is found
  if (itemFound) {
    alert("Yes, '" + userInput + "' is found in the list.");
  } else {
    alert("No, '" + userInput + "' is not found in the list.");
  }
}

// Call the searchItem function
searchItem();*/


//Write a program to identify the largest number in the given array.A = [44, 193, 78, 101, 112]

/*var A = [44, 193, 78, 101, 112];

// Initialize a variable to store the maximum number
var maxNumber = A[0];

// Loop through the array to find the maximum number
for (var i = 1; i < A.length; i++) {
  if (A[i] > maxNumber) {
    maxNumber = A[i];
  }
}

// Display the maximum number
console.log("The largest number in the array is: " + maxNumber);*/


// 10. Write a program to print multiples of 5 ranging 1 to 100.


// Loop from 1 to 100
/*for (var i = 1; i <= 100; i++) {
  // Check if the current number is a multiple of 5
  if (i % 5 === 0) {
    console.log(i);
  }
}*/



