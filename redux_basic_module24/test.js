// const array = Array.from({ length: 0 }, (_, index) => index);
// console.log(array); // Output: [0, 1, 2, ..., 19]

const array = [...Array(5)].map((_, i) => i);
console.log(array);
