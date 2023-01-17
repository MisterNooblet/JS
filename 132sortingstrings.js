const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const asc = foods.sort();
console.log(asc);

const desc = foods.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});
console.log(desc);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const withUpperCaseAsc = foodsWithUpperCase.sort((a, b) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  if (aLower < bLower) {
    return -1;
  } else if (aLower > bLower) {
    return 1;
  }
  return 0;
});
console.log(withUpperCaseAsc);

const withUpperCaseDesc = foodsWithUpperCase.sort((a, b) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  if (aLower < bLower) {
    return 1;
  } else if (aLower > bLower) {
    return -1;
  }
  return 0;
});
console.log(withUpperCaseDesc);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const shortLong = words.sort((a, b) => {
  if (a.length < b.length) {
    return 1;
  } else if (a.length > b.length) {
    return -1;
  }
  return 0;
});

console.log(shortLong);
