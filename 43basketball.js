let john = [89, 120, 103];
let mike = [116, 94, 123];
let mary = [97, 134, 105];

let johnavg = 0;
let mikeavg = 0;
let maryavg = 0;

calcAvgJohn();
calcAvgMike();
calcAvgMary();
function calcAvgJohn() {
  johnavg = 0;
  for (let i = 0; i < john.length; i++) {
    johnavg += john[i];
  }
  johnavg = (johnavg / john.length).toFixed();
}
function calcAvgMike() {
  mikeavg = 0;
  for (let i = 0; i < mike.length; i++) {
    mikeavg += mike[i];
  }
  mikeavg = (mikeavg / mike.length).toFixed();
}

function calcAvgMary() {
  maryavg = 0;
  for (let i = 0; i < mary.length; i++) {
    maryavg += mary[i];
  }
  maryavg = (maryavg / mary.length).toFixed();
}
award();
function award() {
  if (mikeavg > johnavg) {
    console.log(`Mike wins with an average score of${mikeavg}>${johnavg}`);
  } else if (johnavg > mikeavg) {
    console.log(`John wins with an average score of${johnavg}>${mikeavg}`);
  } else {
    console.log(`It's a draw!`);
  }
}
console.log("Adding mary to the sequence");
award2();

function award2() {
  if (mikeavg > johnavg && mikeavg > maryavg) {
    console.log(`Mike wins with an average score of${mikeavg}`);
  } else if (johnavg > mikeavg && johnavg > maryavg) {
    console.log(`John wins with an average score of${johnavg}`);
  } else if (maryavg > mikeavg && maryavg > johnavg) {
    console.log(`Mary wins with an average score of${maryavg}`);
  } else {
    console.log(`It's a draw!`);
  }
}
console.log("Changing scores now..");
changeScores();
function changeScores() {
  john = [89, 120, 103];
  mike = [116, 100, 123];
  mary = [97, 134, 105];
  calcAvgJohn();
  calcAvgMike();
  calcAvgMary();
  award2();
}

console.log("Changing scores now..");
changeScores2();
function changeScores2() {
  john = [135, 120, 103];
  mike = [116, 100, 123];
  mary = [97, 134, 105];
  calcAvgJohn();
  calcAvgMike();
  calcAvgMary();
  award2();
}

console.log("Changing scores now..");
changeScores3();
function changeScores3() {
  john = [135, 120, 103];
  mike = [135, 120, 103];
  mary = [135, 120, 103];
  calcAvgJohn();
  calcAvgMike();
  calcAvgMary();
  award2();
}
