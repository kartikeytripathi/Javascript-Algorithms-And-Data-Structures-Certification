/* ----------------------------------------------------------------------------------------------------------------------

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical
operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate
a string with an undefined variable, you will get a literal string of "undefined".

----------------------------------------------------------------------------------------------------------------------- */

// Initialize these three variables
var a;
var b;
var c;
a = 5;
b = 10; 
c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";