//--- callback function----
// function myFunction(some) {
//   console.log(some);
// }

// function myFirst() {
//   myFunction("Hello");
// }
// function mySecond() {
//   myFunction("World");
// }

// mySecond();
// myFirst();

// sequence controle

// function myDisplay(some) {
//   console.log(some);
// }
// function myCalculator(sum1, sum2) {
//   let sum = sum1 + sum2;
//   return sum;
// }
// let result = myCalculator(5, 4);
// myDisplay(result);
// function myCalculator(sum1, sum2) {
//   let sum = sum1 + sum2;
//   myDisplay(sum);
// }
// myCalculator(5, 5);

// javaScript callback

// function displaySome(value) {
//   console.log(value);
// }
// function myCal(num1, num2, displaySome) {
//   let newSum = num1 + num2;
//   displaySome(newSum);
// }
// myCal(5, 4, displaySome);

// ---hoisting---

x = 5;
elem = document.getElementById("demo");
elem.innerHTML = x;
var x;
