const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function returnNames(data) {
  data.forEach((ele) => {
    console.log(ele.name);
  });
}

returnNames(data);

function returnBornBefore(data) {
  data.forEach((ele) => {
    let bday = ele.birthday.split("-");
    if (bday[2] < 1990) {
      console.log(ele);
    }
  });
}

returnBornBefore(data);
function returnFoods(data) {
  let foodz = {};
  data.forEach((ele) => {
    for (let i of ele.favoriteFoods.meats) {
      if (foodz.hasOwnProperty(i) == false) {
        foodz[i] = 1;
      } else {
        foodz[i] += 1;
      }
    }
    for (let i of ele.favoriteFoods.fish) {
      if (foodz.hasOwnProperty(i) == false) {
        foodz[i] = 1;
      } else {
        foodz[i] += 1;
      }
    }
  });
  console.log(foodz);
}
returnFoods(data);
