var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9); // will return 5 because 5 is declared in parent's scope
var result = firstResult(2); //exact same result for the exact same reason
// -------------------------

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a); //will return 1 because a is a function that is declared 10

// ------------------------------------------

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i); // will log i cause its accesable from inside and it is found before the global i which is undefined
  };
  setTimeout(log, 100);
}
