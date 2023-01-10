const string = "The more you know, the more you know that you don't know";

//method 1
console.log(string.lastIndexOf("you"));
//method 2
console.log([...string.matchAll(/you/g)].pop().index);
