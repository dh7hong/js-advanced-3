// switch
const browser = "Chrome";

switch (browser) {
  case "Firefox":
    console.log("You have chosen Firefox!");
    break;
  case "Chrome":
    console.log("You have chosen Chrome!");
    break;
  case "Edge":
    console.log("You have chosen Edge!");
    break;
  default:
    console.log("You have chosen something else!");
}

// ES Modules Import/Export
import convertCurrency, { BASE_API_URL } from "./utilities.js";

const euroAmount = convertCurrency(100);
console.log(euroAmount);

// window object
console.log(window);

// document object
// console.log(window.document);
// console.log(window.console);
// console.log(window.alert);

// Math
console.log(Math.floor(5.95));
console.log(Math.ceil(5.95));

const result = Math.random() * 100;
console.log(result);

// Date
const date = new Date(2050, 10, 5); // object with date and time

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());

date.setFullYear(2100);

console.log(date);

// OOP in JavaScript
const apartment1 = {
  sqMeters: 100,
  numberOfBedrooms: 3,
  isBig: function () {
    return this.sqMeters > 150;
  },
  calculatePrice: function () {
    return this.sqMeters * this.numberOfBedrooms;
  },
};

console.log(apartment1);
console.log(apartment1.isBig());
console.log(apartment1.calculatePrice());

// Constructor function
class Apartment {
  constructor(sqMeters, numberOfBedrooms) {
    this.sqMeters = sqMeters;
    this.numberOfBedrooms = numberOfBedrooms;
  }

  isBig() {
    return this.sqMeters > 150;
  }

  calculatePrice() {
    return this.sqMeters * this.numberOfBedrooms;
  }
}

const apartment2 = new Apartment(300, 3);

console.log(apartment2);
console.log(apartment2.isBig());
console.log(apartment2.calculatePrice());

// promises
