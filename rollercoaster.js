// rollercoaster.js
// This code is a CanaryMod/ScripCraft port of Mikael Jönsson's code published on http://vaxjo.coderdojo.se/scriptcraft-rollercoaster/
// This code has been tested with CanaryMod-1.2.0 and ScriptCraft 3.1.4

var Drone = require('drone');

function rail_up(block_type, length) {
  var drone = this;
  drone.box(block_type, 1, 1, length);
  drone.up();
  drone.box(blocks.rail, 1, 1, length);
  drone.fwd(length);
}

Drone.extend(rail_up);
// Now test it out in the chat: 
// Nu kan du testköra i chatten:
//   js rail_up(blocks.stone, 5)
 
function rail_fwd(block_type, length) {
  var drone = this;
  drone.rail_up(block_type, length);
  drone.down();
}

Drone.extend(rail_fwd);
// Test it out in the chat: 
// Testkör i chatten:
//   js rail_fwd(blocks.stone, 5)
 
function rail_down(block_type, length) {
  var drone = this;
  drone.down();
  drone.rail_fwd(block_type, length);
}

Drone.extend(rail_down);
// Test it out in the chat: 
// Testkör i chatten:
//   js rail_down(blocks.stone, 5)
 
function power_rail_up(block_type, length) {
  var drone = this;
  drone.box(block_type, 1, 1, length);
  drone.down();
  drone.box(blocks.torch_redstone_active, 1, 1, 1);
  drone.up();
  drone.up();
  drone.box(blocks.powered_rail, 1, 1, length);
  drone.fwd(length);
}

Drone.extend(power_rail_up);
// Test it out in the chat: 
// Testkör i chatten:
//   js power_rail_up(blocks.stone, 5)

function rollercoaster() {
  var drone = this; // Vi är en drönare, ett osynligt flygande föremål i ScriptCraft som sätter ut block
  drone.fwd(5); // Drönaren går 5 steg framåt
 
  drone.rail_fwd(blocks.stone, 1); // Säger åt drönaren att skapa ett stenblock med räls på

  // En slinga (känner du igen den från scratch?) som skapar en backe med power rails
  for (var i = 0; i < 36; i++) {
    drone.power_rail_up(blocks.stone, 1).times(36);
  }
 
  drone.rail_fwd(blocks.stone, 1);
  drone.turn(); // Svänger dronen åt höger
  drone.rail_fwd(blocks.stone, 1);

  // En slinga som gör en utförsbacke
  for (var i = 0; i < 10; i++) {
    drone.rail_down(blocks.stone, 1);
  }
 
  drone.rail_fwd(blocks.stone, 1); // Kommer du ihåg vad denna gjorde?
 
  drone.turn();
  drone.rail_fwd(blocks.stone, 10);
 
  drone.turn();
  drone.rail_fwd(blocks.stone, 2);
 
  // Ännu en nerförsbacke. Glöm inte bort att testa!
  for (var i = 0; i < 15; i++) {
      drone.rail_down(blocks.stone, 1);
  } 
 
  drone.rail_fwd(blocks.stone, 2);
  drone.back(); // Backar ett steg
  drone.turn(3); // Svänger 3 steg (270 grader), åt vänster i detta fallet
  drone.rail_fwd(blocks.stone, 10);
 
  drone.back();
  drone.turn(3);
  drone.fwd();
  drone.rail_fwd(blocks.stone, 10);
 
  drone.back();
  drone.turn();
  drone.fwd();
  drone.rail_fwd(blocks.stone, 2);
  for (var i = 0; i < 11; i++) {
    drone.rail_down(blocks.stone, 1);
  }
 
  drone.rail_fwd(blocks.stone, 10);
 
  drone.back();
  drone.turn();
  drone.fwd();
  drone.rail_fwd(blocks.stone, 4);
 
  drone.back();
  drone.turn();
  drone.fwd();
  drone.rail_fwd(blocks.stone, 3);
}; // rollercoaster

Drone.extend(rollercoaster);
