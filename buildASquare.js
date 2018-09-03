/**
 I will give you an integer. Give me back a shape that is as long and wide as the integer. 
 The integer will be a whole number between 0 and 50.
Example: Integer = 3; I expect a 3x3 square back just like below as a string.

Solution:

+++
+++
+++
 */
function generateShape(int){
var block = "+";
var row = "";
var square = "";

for(let c = 0; c < int; c++) {
    row = row.concat(block)
}
for(let c = 0; c < int; c++) {
    square = square.concat(row, '\n')
}
square = square.trim()
return square
}

console.log(generateShape(3))