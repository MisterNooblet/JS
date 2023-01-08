area = null;

function calcArea(radius) {
  area = Math.PI * radius ** 2;
  return area;
}

calcArea(2.4);

console.log(area);
console.log(area.toFixed(2));
