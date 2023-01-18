const obj1 = {
  name: "string1",
};
const obj2 = {
  name: "string2",
};
const obj3 = {
  name: "string3",
};

const mapObj = [obj1, obj2, obj3].map((val, i) => {
  val = i;
});
console.log(mapObj);
