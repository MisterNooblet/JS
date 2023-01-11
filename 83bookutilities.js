`use strict`;
// 1. create 2 book objects with properties: name, author, year.
const book1 = {
  name: "book1",
  author: "author1",
  year: "2022",
};
const book2 = {
  name: "book2",
  author: "author2",
  year: "2023",
};
// 2. create an empty object bookUtils (utils = short for utilities).
const bookUtils = {};
// 3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.
bookUtils.getFirstPublished = function (book1, book2) {
  if (book1.year < book2.year) {
    return book1;
  } else {
    return book2;
  }
};
// 4. add to the bookUtils object a function setNewEdition, that
// receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an
// existing one.
bookUtils.setNewEdition = function (book, editionYear) {
  book.latestEdition = editionYear;
};
// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the languahe, or updates an existing one.
bookUtils.setLanguage = function (book, language) {
  book.languageprop = language;
};
// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.
bookUtils.setTranslation = function (book, language, translator) {
  book.translation = { language: language, translator: translator };
};
// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that contains
// the name and location.
bookUtils.setTranslation = function (book, name, location) {
  book.translation = { name: name, location: location };
};
// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books.
bookUtils.isSamePublisher = function (book1, book2) {
  if (book1.author == book2.author) {
    return true;
  } else {
    return false;
  }
};
