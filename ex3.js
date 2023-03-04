//Exercise 3
function Car(manufacturer, model, numberOfSeats, color){
    this.manufacturer = manufacturer;
    this.model = model;
    this.numberOfSeats = numberOfSeats;
    this.color = color;
}

const one = new Car("Bmw", "BmW X6", 4, "Black");
const two = new Car("Mercedes", "AMG SL", 2, "Red");
const three = new Car("Tesla", "Roadster", 2, "White");
const four = new Car("Maserati", "MC20", 2, "White");

console.log(one);
console.log(two);
console.log(three);
console.log(four);