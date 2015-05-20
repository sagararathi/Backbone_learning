
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
// Creating Model Vehicle
var Vehicle = Backbone.Model.extend({
  // Defining unique registrationNumber attribute
  idAttribute: "registrationNumber",
  // defining default value
  defaults: {
    color: "Black"
  },
  // defining route
  urlRoot: "/api/vehicles",
  // defining function start to indicate vehicle is start on call
  start: function(){
    console.log("Vehicle Started.");
  },
  // validate registration number should not be empty

  validate: function(attrs){
    if(!attrs.registrationNumber)
      console.log("Registration Number can't be Empty or null");
  }
});
//  Inherating vechile to car
var Car = Vehicle.extend({
  start: function(){
    console.log("Car with registration number " + car.get("registrationNumber") + " started.");
  }
});

var Cars = Backbone.Collection.extend({
  model: Car
});

var cars = new Cars([
  new Car({ registrationNumber: "RATHI'S", make: "Nissan", topSell: 1000}),
  new Car({ registrationNumber: "SAGAR", make: "Honda", topSell: 50}),
  new Car({ registrationNumber: "Aadarsh", make: "Buggati", color: "Red-Gray", topSell: 500})
  ]);

// add to cars to collections.
cars.add( new Car({registrationNumber: "MANALI", make: "Minicooper", color: "Black-Red", topSell: 200}, {at: 0}));
cars.push(new Car({registrationNumber: "Anushree", make: "Ferrari", color: "Red", topSell: 2}));

// To find data from collections.
// where function will return array
console.log(cars.where({color: "Black"}));
// findWhere function will return first object
console.log(cars.findWhere({color: "Black"}));
// where and findWhere can take multiple parameters.
console.log(cars.where({color: "Black", make: "Nissan"}));

//  to filter data use filter method

var topSold = cars.filter(function(car){
  return car.get("topSell") > 999;
});

console.log("Top Sold ", topSold);

// iterate over collections. Using each method
cars.each(function(song){
  console.log(song.toJSON());
});