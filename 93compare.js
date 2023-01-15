const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
compare(food, food1);
function compare(arr1, arr2) {
  for (const i in arr1) {
    let includes1 = null;
    let includes2 = null;
    for (const x in arr2) {
      if (arr2[x] === arr1[i]) {
        console.log(arr1[i]);
      }
    }
  }
}
