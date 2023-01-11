const object1 = {
  color: "blue",
  hex: "#0000FF",
};

const swapped = {};
for (const key in object1) {
  x = object1[key];
  swapped[x] = key;
}
console.log(swapped);
