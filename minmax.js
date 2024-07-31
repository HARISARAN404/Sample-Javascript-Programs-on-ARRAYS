const numbers = [5, 12, 8, 130, 44];

const maxValue = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
const minValue = numbers.reduce((min, current) => (current < min ? current : min), numbers[0]);

console.log(maxValue,minValue);