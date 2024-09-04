// 1. Named Function
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 4)); // Output: 7

// 2. Anonymous Function (assigned to a variable)
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 6)); // Output: 11

// 3. Named Function Expression (assigned to a variable with a function name)
const sum = function sumNumbers(a, b) {
    return a + b;
};
console.log(sum(7, 8)); // Output: 15

// 4. Arrow Function
const addArrow = (a, b) => a + b;
console.log(addArrow(9, 10)); // Output: 19

// 5. Arrow Function with Block Body (multiple statements)
const addWithBlock = (a, b) => {
    return a + b;
};
console.log(addWithBlock(11, 12)); // Output: 23