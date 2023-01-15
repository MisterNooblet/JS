let str = "";
let space = "   ";
for (let i = 1; i < 5; i++) {
  for (let x = 0; x < 4; x++) {
    str += "#";
    space = space.slice(0, -1);
    console.log(`Steps (${i}) :${str}${space}`);
  }
}

for (let i = 1; i < 5; i++) {
  str = "";
  space = "   ";
  for (let x = 1; x <= i; x++) {
    str += "#";
    space = space.slice(0, -1);
    console.log(`Steps (${i}) :${str}${space}`);
  }
}
