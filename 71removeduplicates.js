let arr = [1, 1, 1, 1, 5, 5, 5, 5, 6, 6, 6, 1, 6, 6, 13, 45, 45, 45];

let solution = arr.filter((num, index) => arr.indexOf(num) === index);

console.log(solution);
