
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

var car = new Car({ registrationNumber: "RATHI'S", make: "Nissan"});

car.start();
