// rollercoaster.js
// This code is a CanaryMod/ScripCraft port of Mikael Jönsson's code published on http://vaxjo.coderdojo.se/scriptcraft-rollercoaster/
// This code has been tested with CanaryMod-1.7.10-1.1.3-SNAPSHOT-shaded and ScriptCraft 3.0.1-2014-11-14	

var Drone = require('../drone/drone').Drone;

function rail_up(drone, block_type, length) {
  drone.box(block_type, 1, 1, length);
  drone.up();
  drone.box(blocks.rail, 1, 1, length);
  drone.fwd(length);
}
 
function rail_fwd(drone, block_type, length) {
  rail_up(drone, block_type, length);
  drone.down();
}
 
function rail_down(drone, block_type, length) {
  drone.down();
  rail_fwd(drone, block_type, length);
}
 
function power_rail_up(drone, block_type, length) {
  drone.box(block_type, 1, 1, length);
  drone.down();
  drone.box(blocks.torch_redstone_active, 1, 1, 1);
  drone.up();
  drone.up();
  drone.box(blocks.powered_rail, 1, 1, length);
  drone.fwd(length);
}

function rollercoaster() {
  var drone = this; // Detta är vår drönare, ett osynligt flygande föremål i ScriptCraft som sätter ut block
  drone.fwd(5); // Drönaren går 5 steg framåt
 
  rail_fwd(drone, blocks.stone, 1); // Säger åt drönaren att skapa ett stenblock med räls på

  // En slinga (känner du igen den från scratch?) som skapar en backe med power rails
  for (var i = 0; i < 36; i++) {
    power_rail_up(drone, blocks.stone, 1);
  }
 
  rail_fwd(drone, blocks.stone, 1);
 
  drone.turn(); // Svänger dronen åt höger
  rail_fwd(drone, blocks.stone, 1);
 
  // En slinga som gör en utförsbacke
  for (var i = 0; i < 10; i++) {
    rail_down(drone, blocks.stone, 1);
  }
 
  rail_fwd(drone, blocks.stone, 1); // Kommer du ihåg vad denna gjorde?
 
  drone.turn();
  rail_fwd(drone, blocks.stone, 10);
 
  drone.turn();
  rail_fwd(drone, blocks.stone, 2);
 
  // Ännu en nerförsbacke. Glöm inte bort att testa!
  for (var i = 0; i < 15; i++) {
    rail_down(drone, blocks.stone, 1);
  } 
 
  rail_fwd(drone, blocks.stone, 2);
  drone.back(); // Backar ett steg
  drone.turn(3); // Svänger 3 steg (270 grader), åt vänster i detta fallet
  rail_fwd(drone, blocks.stone, 10);
 
  drone.back();
  drone.turn(3);
  drone.fwd();
  rail_fwd(drone, blocks.stone, 10);
 
  drone.back();
  drone.turn();
  drone.fwd();
  rail_fwd(drone, blocks.stone, 2);
  for (var i = 0; i < 11; i++) {
    rail_down(drone, blocks.stone, 1);
  }
 
  rail_fwd(drone, blocks.stone, 10);
 
  drone.back();
  drone.turn();
  drone.fwd();
  rail_fwd(drone, blocks.stone, 4);
 
  drone.back();
  drone.turn();
  drone.fwd();
  rail_fwd(drone, blocks.stone, 3);
};

Drone.extend(rollercoaster); // lägg till vår funktion rollercoaster() som en utökad variant av Drone
