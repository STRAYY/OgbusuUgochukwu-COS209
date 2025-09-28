// Concept: Array methods (map, filter, reduce, etc.) help transform and query arrays.
const nums = [5, 12, 8, 130, 44];

const squares = nums.map(n => n * n);
console.log('squares:', squares);

const big = nums.filter(n => n > 10);
console.log('>10:', big);

const sum = nums.reduce((acc, n) => acc + n, 0);
console.log('sum:', sum);

const found = nums.find(n => n % 2 === 0);
console.log('first even:', found);
