//modify the functions below to satisfy the tests

/*------------------------------*/

//use rest in function parameter
//if input is (1, 2, 3) the function should return [2, 4, 6]
//the function should account for n number of arguments
const rest = (...input) => input.map(element => element * 2);
// the ... will make the input an array

// function rest(input) {
//   return input.map(function(element) {
//     return element * 2;
//   });
// };

/*------------------------------*/

//use spread to concat arrays
//if first and last are ([1, 2, 3], [4, 5, 6]) return [1, 2, 3, 4, 5, 6]
const concat = (first, last) => (...first, ...last);

// function concat(first, last) {
//   return first.concat(last);
// };

/*------------------------------*/

//use spread to spread an array
//if input is [1, 2, 3] return 6
const add = (a, b, c) => a + b + c;
const spreadAdd = input => add(...input);

// function add(a, b, c) {
//   return a + b + c;
// };
// function spreadAdd(input) {
//   add(input);
// };


/*------------------------------*/

//use spread with Math.max/min
//if input is [1, 2, 4, 7, 9] return 9
const mathSpread = numbers => Math.max(...numbers);

//circumvents the use of apply

// function mathSpread(numbers) {
//   return Math.max.apply(null, numbers);
// };

module.exports = {
  rest,
  concat,
  spreadAdd,
  mathSpread
}
