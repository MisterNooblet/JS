`use strict`

function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function () {
    if (this.a === this.b && this.a === this.c && this.a === this.d) {
        return true
    }
    return false
}

sq1 = new Square(4, 4, 4, 4)
console.log(sq1);

console.log(sq1.isSquare());