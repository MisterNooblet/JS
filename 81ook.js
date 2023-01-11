const book = {
  name: "The Witcher",
  pages: "235",
  release: "1990",
  author: "Andrzej Sapkowski",
  series: "Short story collections",
};

let presentBook = (book) =>
  console.log(
    `The book ${book["name"]} was written by ${book.author} in the year ${book.release}. It has ${book.pages} and its part of the ${book.series} series.`
  );
presentBook(book);
