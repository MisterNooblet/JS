const movies = [
  "Big Lebowski",
  "Boondock Saints",
  "Pulp Fiction",
  "Sin City",
  "Fight Club",
  "V for Vendetta",
];
const movieList1 = [];
movies.forEach(function (m, i) {
  movieList1.push({
    index: i,
    name: m,
  });
});

const movieList = movies.map(function (m, i) {
  return {
    index: i,
    name: m,
  };
});
console.log(movieList);
console.log(movieList1);
