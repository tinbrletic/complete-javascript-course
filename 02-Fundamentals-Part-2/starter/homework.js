"use strict";

// //Values and Variables

// let population = 4;

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// // Data Types

// let language;

// // console.log(isIsland);
// // console.log(population);
// // console.log(country);
// // console.log(language);

// // let, const and var

// language = "croatian";
// // language = "english";

// const country = "Croatia";
// const continent = "Europe";
// const isIsland = false;

// //isIsland = true;

// // Basic Operators

// // console.log(population / 2);

// // console.log(++population);

// // console.log(population > 6);
// // console.log(population < 33);

// const description1 =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

// // console.log(description);

// // Strings and Template Literals

// const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;

// // console.log(description2);

// // Taking Decisions: if / else Statements

// // population = 130;

// // if (population < 33) {
// //   console.log(
// //     `${country}'s population is ${33 - population} million below average`
// //   );
// // } else {
// //   console.log(`${country}'s population is above average`);
// // }

// //// Type Conversion And Coercion

// // console.log("9" - "5"); // -> 4
// // console.log("19" - "13" + "17"); // -> "617"
// // console.log("19" - "13" + 17); // -> 23
// // console.log("123" < 57); // -> false
// // console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// //// Equality Operators: == vs. ===

// // const numNeighbours = Number(
// //   prompt(`How many neighbour countries does your contry have?`)
// // );

// // if (numNeighbours === 1) {
// //   console.log(`Only 1 border!`);
// // } else if (numNeighbours > 1) {
// //   console.log(`More than 1 border`);
// // } else {
// //   console.log(`No borders`);
// // }

// //// Logical Operators

// // if (language === `english` && population < 50 && !isIsland) {
// //   console.log(`You should live in ${country} :)`);
// // } else {
// //   console.log(`${country} does not meet your criteria :(`);
// // }

// //// The switch Statement

// // language = "croatian";

// // switch (language) {
// //   case "chinese":
// //   case "mandarin":
// //     console.log(`MOST number of native speakers!`);
// //     break;
// //   case "spanish":
// //     console.log(`2nd place in number of native speakers`);
// //     break;
// //   case "english":
// //     console.log(`3rd place`);
// //     break;
// //   case "hindi":
// //     console.log(`Number 4`);
// //     break;
// //   case "arabic":
// //     console.log(`5th most spoken language`);
// //     break;
// //   default:
// //     console.log(`Great language too :D`);
// //     break;
// // }

// //// The Conditional (Ternary) Operator

// // console.log(
// //   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// // );

////////////////////////////////////////////////
///////////////////////////////////////////////

//// Functions

function describeCountry(country, population, capitalCity) {
  const str = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return str;
}

const france = describeCountry("France", 68, "Paris");
const germany = describeCountry("Germany", 83, "Berlin");
const croatia = describeCountry("Croatia", 4, "Zagreb");

// console.log(france);
// console.log(germany);
// console.log(croatia);

////// Function Declarations vs. Expressions

function percentOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percntGermany = percentOfWorld2(84);
const percntFrance = percentOfWorld2(68);
const percntCroatia = percentOfWorld2(4);

// console.log(percntGermany, percntFrance, percntCroatia);

/////// Arrow Functions

const percentOfWorld3 = (population) => (population / 7900) * 100;

// console.log(percentOfWorld3(131));

//////////// Functions Calling Other Functions

function describePopulation(country, population) {
  const prcnt = percentOfWorld3(population);

  return `${country} has ${population} million people, which is about ${prcnt.toPrecision(
    3
  )}% of the world`;
}

// console.log(describePopulation("China", 1441));

///////// Introduction to Arrays
// const populations = [4, 89, 68, 1441];
// console.log(populations.length === 4);

// const percentages = [
//   percentOfWorld1(populations[0]),
//   percentOfWorld1(populations[1]),
//   percentOfWorld1(populations[2]),
//   percentOfWorld1(populations[3]),
// ];

// console.log(percentages);

//////////////// Basic Array Operations (Methods)
const neighbours = ["Slovenia", "Hungary", "Serbia", "Bosnia", "Montenegro"];
neighbours.push("Utopia");
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);

if (!neighbours.includes("Germany")) {
  // console.log(`Probably not a central european country :D`);
}

neighbours[3] = "Bosna i Hercegovina";

// console.log(neighbours);

////// Introduction to Objects

const myCountry = {
  country: "Croatia",
  capital: "Zagreb",
  language: "croatian",
  population: 4,
  neighbours: ["Slovenia", "Hungary", "Serbia", "Bosnia", "Montenegro"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

////////// Dot vs. Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

myCountry.population += 2;
// console.log(myCountry.population);

myCountry["population"] -= 2;
// console.log(myCountry.population);

///////// Object Methods
// add method describe to object myCountry
// add method checkIsland to object myCountry

// console.log(myCountry.describe());
myCountry.checkIsland();

// console.log(myCountry);

/////////// Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

///////// Looping Arrays, Breaking and Continuing

const populations = [4, 89, 68, 1441];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentOfWorld1(populations[i]));
}

// console.log(percentages2);

////////// Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    //console.log(`Neigbour: ${listOfNeighbours[i][j]}`);
  }
}

////////////// The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentOfWorld1(populations[i]));
  i++;
}

// console.log(percentages3);
