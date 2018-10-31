/**********************************************************************************************************************

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
When a function is defined, it is typically defined along with one or more parameters. The actual values that are input
(or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun:

testFun("Hello", "World");

***************************************************************************************************************************/

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(x,y)
{
  console.log(x+y);

}
functionWithArgs(10,5);
