"use strict";
function printArray(array) {
    console.log(array.join(', '));
}
let array = [2, 3, 4];
console.log(array.shift()); //2
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array.pop()); //5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
let everyisgreater = array.every(x => x > 3);
console.log(everyisgreater); //false
/** check if every number is less than 10 */
let everyisless = array.every(x => x < 10);
console.log(everyisless); //true
console.log(array.sort()); //1,3,4,8
console.log(array.sort((a, b) => b - a)); //8,4,3,1
