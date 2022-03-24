// 01.
/* let number = 25;
let str = "hello world";
let isWorking = true; */

// 02.
/* let score = 85;
console.log(score);
const PI = 3.141592653589793;
score = 95;
console.log(score);
console.log(PI); */

// 03.
let x = 84;
let y = 65;
let sum = x + y;
let sub = x - y;
let multiply = x * y;
let divide = x / y;
let modules = x % 2;
// console.log(sum, sub, multiply, modules, divide);

// 04.
let lessThen = x < y; // false
let gaterThen = x > y; // true
let equal = x == y; // false
let notEqual = x != y; // true
let lessOrEqual = x <= y; // false
let gaterOrEqual = x >= y; // true

// 05. 06.
/* if (lessThen == true && typeof x == "number") {
    console.log(x, " is less then ", y);
} else if (modules == 0) {
    console.log("the x number ", x, " is even");
} else {
    console.log("no result found yat!");
} */

// 07.
let i = 7;
while (i < 19) {
    if (i % 2 != 0) {
        // console.log(i);
    }
    i++;
}

// 08.
let arr = [46, 77, 96, 14, 36, 90, 120, 74, 63, 11, 76];
let arrLength = arr.length;
arr[3] = 114;
arr.push(300);
arr.unshift(400);
arr.shift();
arr.unshift(900);
arr.unshift(95);
let last = arr.pop();
arr.unshift(last);
// console.log(arr);
// console.log(last);

// 09.
for (const element of arr) {
    // console.log(element);
}
for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i]);
}

// 10.
for (const element of arr) {
    if (element >= 80) {
        // console.log(element);
    }
}

// 11.
function getMultiply(num1, num2, num3) {
    return num1 * num2 * num3;
}
const result = getMultiply(5, 3, 2);
// console.log(result);

// 12.
let products = [
    (product1 = { name: "Nokia", price: 8000, is4GSupport: false }),
    (product2 = { name: "Samsung", price: 15000, is4GSupport: true }),
    (product2 = { name: "Apple", price: 90000, is4GSupport: true }),
];
products[1].is4GSupport = false;
products[1].price = 12000;
console.log(products);
