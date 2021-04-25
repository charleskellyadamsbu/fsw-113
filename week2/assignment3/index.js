let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
]

let additionalCars = [
  {
    "color": "green",
    "type": "sedan",
    "registration": new Date('2017-01-03'),
    "capacity": 4
  },
  {
    "color": "red",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 8
  },
  {
    "color": "purple",
    "type": "sedan",
    "registration": new Date('2013-01-09'),
    "capacity": 4
  },
  {
    "color": "black",
    "type": "minivan",
    "registration": new Date('2017-07-02'),
    "capacity": 7
  },
  {
    "color": "green",
    "type": "hatchback",
    "registration": new Date('2016-11-13'),
    "capacity": 6
  },
  {
    "color": "silver",
    "type": "truck",
    "registration": new Date('2011-01-01'),
    "capacity": 4
  },
  {
    "color": "purple",
    "type": "sedan",
    "registration": new Date('2014-12-03'),
    "capacity": 4
  },
  {
    "color": "green",
    "type": "motorcycle",
    "registration": new Date('2021-02-04'),
    "capacity": 1
  },
]

cars = cars.concat(additionalCars);

function filterRed(element, index, array) {
    if(element.color == "red") {
        return element;
    }
}

function filterAllCars(element, index, array) {
    return element;
}

let redCars = cars.filter(filterRed);
console.log("__________");
console.log(redCars);

let allCars = cars.filter(filterAllCars);
console.log("__________");
console.log(allCars);

console.log("__________");
console.log(cars.filter((element) => element.color == "red"));

console.log("__________");

console.log(cars.filter((element) => element));

let redAndGreen = cars.filter((element) => element.color == "red" || element.color == "green");
console.log("__________");
console.log(redAndGreen);