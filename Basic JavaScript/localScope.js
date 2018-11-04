/********************************************************************************************************************
Variables which are declared within a function, as well as the function parameters have local scope. 
That means, they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
loc is not defined outside of the function.
**********************************************************************************************************************/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar="A";
  
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test
