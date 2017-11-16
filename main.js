//use rest in function parameter
//if input is (1, 2, 3), the function should return [2, 4, 6]
const rest = (input) => input.map(element => element * 2)

// function rest(input) {
//   return input.map(function(element) {
//     return element * 2;
//   });
// };

//use spread in function call
//if input is [1, 2, 3], spread will return 6
const add = (...numbers) => numbers.reduce((sum, element) => sum + element)
const spread = input => add(input)

// function add(...numbers) {
//   return numbers.reduce(function(sum, element) {
//     return sum + element;
//   });
// };
// function spread(input) {
//   return add(input);
// };

//use spread to concat arrays
//expect ([1, 2, 3], [4, 5, 6]) to equal [1, 2, 3, 4, 5, 6]
const concat = (first, last) => first.concat(last)

// function concat(firs, last) {
//   return first.concat(last);
// };

module.exports = {
  rest,
  spread,
  concat
}
