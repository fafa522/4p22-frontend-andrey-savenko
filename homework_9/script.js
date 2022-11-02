'use strict'


const fibonacci = function makeFibonacciFunction() {
let a = 0;
let b = 1;
return function () {
let c = a + b;
console.log(a);
a = b;
b = c; 
};
}();

fibonacci(); // Вывод в консоль: 0
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3
fibonacci(); // Вывод в консоль: 5