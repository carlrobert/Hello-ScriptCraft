# ScriptCraft Rollercoaster
![2014-01-21_20 41 53-638x300](https://cloud.githubusercontent.com/assets/4598641/6439957/a7369d8c-c0d8-11e4-8420-7298200a9410.png)

Det allra bästa är om du har tittat på JavaScript del 1 till 4 innan du hoppar på detta. Kolla även på den andra ScriptCraft-guiden!

Skapa en mapp med ditt namn i <code>craftbukkit/plugins/scriptcraft/plugins/</code> och lägg en fil som heter
<code>rollercoaster.js</code> i den mappen.

I den här filen börjar vi med att göra fyra funktioner. Tre för att göra vanliga block med en räls på, en som går uppåt, en framåt och en nedåt. Den sista gör ett block med en power rail på och en redstone torch som sätter igång powerrailen.

```javascript
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
```

Nu ska vi koppla en funktion till ScriptCraft som bygger upp vår berg- och dalbana. Det kan man göra genom att koppla en funktion på en inbyggd variabel i ScriptCraft som heter ```exports```. Funktioner som är kopplade till exports kan man sedan anropa i Minecraft genom att öppna  chattfönstret och skriva ```/js rollercoaster()```.

Börja med att skriva en tom funktion, och fyll sedan på med det som står längre ner.

```javascript
exports.rollercoaster = function() {
 
}
```

Här är hela rollercoaster-funktionen, skriv lite i taget och provkör i Minecraft! Det blir mycket roligare och lättare att förstå vad som händer Sådant som står efter ```//``` är kommentarer och inget du behöver skriva, men ibland hjälper det att komma ihåg vad man har gjort.

```javascript
exports.rollercoaster = function() {
  var drone = new Drone(); // Skapar en ny drone, en drone är ett osynlig flygande objekt i ScriptCraft som sätter ut block
  drone.fwd(5); // Går 5 steg framåt med drone
 
  rail_fwd(drone, blocks.stone, 1); // Säger åt dronen att skapa ett sten-block med en räls på
 
  // En loop (känner du igen den från scratch?) som skapar en backe med power rails
  for (var i = 0; i < 36; i++) {
    power_rail_up(drone, blocks.stone, 1);
  }
 
  rail_fwd(drone, blocks.stone, 1);
 
  drone.turn(); // Svänger dronen åt höger
  rail_fwd(drone, blocks.stone, 1);
 
  // En loop som gör en backe som man kommer åka ut för
  for (var i = 0; i < 10; i++) {
    rail_down(drone, blocks.stone, 1);
  }
 
  rail_fwd(drone, blocks.stone, 1); // Kommer du ihåg vad denna gjorde?
 
  drone.turn();
  rail_fwd(drone, blocks.stone, 10);
 
  drone.turn();
  rail_fwd(drone, blocks.stone, 2);
 
  // Ännu en backe neråt. Glöm inte bort att testa!
  for (var i = 0; i < 15; i++) {
    rail_down(drone, blocks.stone, 1);
  } 
 
  rail_fwd(drone, blocks.stone, 2);
  drone.back(); // Backar ett steg
  drone.turn(3); // Svänger 3 steg (270 grader), det blir åt vänster i detta fallet
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
}
```

Kan du göra en coolare berg- och dalbana än mig?
Värt att nämna är att man bör vara vänd norrut när man anropar skriptet, annars flyger man ur i mitten någonstans när man åker.
