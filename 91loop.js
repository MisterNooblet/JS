const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (const i of listOfNeighbours) {
  for (let x = 0; x < i.length; x++) {
    console.log(i[x]);
  }
}
