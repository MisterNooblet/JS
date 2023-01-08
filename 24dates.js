const d = new Date();
let day = d.getDay();
let month = d.getMonth();

let dayname = null;
let date = d.getDate();
let monthName = d.getUTCMonth();
let year = d.getFullYear();
let dateString = null;
convertDayName(day);
convertMonthName(month);

function convertDayName(day) {
  switch (day) {
    case 0:
      dayname = "Sunday";
      break;

    case 1:
      dayname = "Monday";
      break;
    case 2:
      dayname = "Monday";
      break;
    case 3:
      dayname = "Tuesday";
      break;
    case 4:
      dayname = "Wednesday";
      break;
    case 5:
      dayname = "Friday";
      break;
    case 6:
      dayname = "Saturday";
      break;
  }
}

function convertMonthName(month) {
  switch (month) {
    case 0:
      monthName = "January";
      break;

    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
  }
}

returnDate();

function returnDate() {
  dateString = `Today is ${dayname} the ${date}th of ${monthName} ${year}`;

  return dateString;
}
console.log(dateString);
