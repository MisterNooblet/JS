let numbers = [];
function boomer(n) {
  numbers = [];
  let i = [1];
  let x = [];
  for (i; i <= n; i++) {
    x = i.toString();
    if (!x.includes(7) && i % 7 == 0) {
      numbers.push("BOOM");
    } else if (x.includes(7) && i % 7 == 0) {
      numbers.push("BOOM-BOOM");
    } else {
      numbers.push(x);
    }
  }
}
