// So far, we have been storing one piece of data in variables
var name = "Farley";
var pets = 5; 
var isStudent = true;

// To store groups of data in a single variable, we use arrays
var names = ["Farley", "Asher", "Sage", "Beelzebub"];

// The entire array can be accessed by using the array's name 
console.log(names);

// To log a single element, we use the name of the array with the index in brackets
console.log(names[1]); 

// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(names[0]); 

// We can also use index to replace data in an array
// Returns "Beelzebub"
console.log(names[3]);

//Replaces "Beelzebub" with "Faye"
names[3] = "Faye"; 

// Logs "Faye"
console.log(names[3]);

// We use the array's length property to determine how many elements are in the array
console.log(names.length);
