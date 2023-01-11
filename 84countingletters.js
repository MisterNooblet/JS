const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const count = {};
let highestnum = 0;
let higheststring = null;
for (const i of array) {
  z = i.toLowerCase();
  for (const x of z) {
    if (x.includes(" ")) {
    } else {
      count[x] = 0;
    }
  }
}
for (const i of array) {
  z = i.toLowerCase();
  for (const x of z) {
    if (!x.includes(" ")) {
      count[x] += 1;
    }
  }
}
for (const key in count) {
  if (count[key] > highestnum) {
    highestnum = count[key];
    higheststring = `${key} has the highest occurence which is ${count[key]}`;
  }
}
console.log(count);
console.log(higheststring);
