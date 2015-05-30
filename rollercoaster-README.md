# ScriptCraft Rollercoaster
![2014-01-21_20 41 53-638x300](https://cloud.githubusercontent.com/assets/4598641/6439957/a7369d8c-c0d8-11e4-8420-7298200a9410.png)

Det allra bästa är om du har tittat på JavaScript del 1 till 4 innan du hoppar på detta. Kolla även på den andra ScriptCraft-guiden!

Skapa en mapp med ditt namn i <code>craftbukkit/plugins/scriptcraft/plugins/</code> och lägg en fil som heter
<code>rollercoaster.js</code> i den mappen.

I den här filen börjar vi med att göra fyra funktioner. Tre för att göra vanliga block med en räls på, en som går uppåt, en framåt och en nedåt. Den sista gör ett block med en power rail på och en redstone torch som sätter igång powerrailen.

*FIXA: Beskriv hur man testar en funktion i taget från chatten*

```javascript
var Drone = require('drone');

function rail_up(block_type, length) {
  var drone = this;
  drone.box(block_type, 1, 1, length);
  drone.up();
  drone.box(blocks.rail, 1, 1, length);
  drone.fwd(length);
}

Drone.extend(rail_up);
```
Spara din fil och skriv `/js refresh()` i chatten. Du kan nu testa koden så här långt. Skriv t.ex. `/js rail_up(blocks.stone, 5)` i chatten. Fungerar det?

Lägg till `rail_fwd` och testa på samma sätt:
```javascript
function rail_fwd(block_type, length) {
  var drone = this;
  drone.rail_up(block_type, length);
  drone.down();
}

Drone.extend(rail_fwd);
```

Lägg nu till `rail_down` och testa den sen:
```javascript
function rail_down(block_type, length) {
  var drone = this;
  drone.down();
  drone.rail_fwd(block_type, length);
}

Drone.extend(rail_down);
```

Och slutligen `power_rail_up`:
```javascript
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
```

Nu ska vi koppla en funktion till ScriptCraft som bygger upp vår berg- och dalbana. Börja med att skriva en tom funktion och fyll sedan på med det som står längre ner.

```javascript
function rollercoaster() {
  var drone = this, // Vi är en drönare, ett osynligt flygande föremål i ScriptCraft som sätter ut block
    i;
} 

Drone.extend(rollercoaster);
```

Du kan testa att du gjort rätt så här långt genom att göra `/js refresh()` och sen `/js rollercoaster()`. Inget ska hända och inga felutskrifter ska dyka upp.

Här är hela `rollercoaster`-funktionen. Skriv lite i taget och provkör i Minecraft! Det blir mycket roligare och lättare att förstå vad som händer Sådant som står efter `//` är kommentarer och inget du behöver skriva, men ibland hjälper det att komma ihåg vad man har gjort.

```javascript
function rollercoaster() {
  var drone = this, // Vi är en drönare, ett osynligt flygande föremål i ScriptCraft som sätter ut block
    i;

  drone.fwd(5); // Drönaren går 5 steg framåt
  drone.rail_fwd(blocks.stone, 1); // Säger åt drönaren att skapa ett stenblock med räls på

  // En slinga (känner du igen den från scratch?) som skapar en backe med power rails
  for (i = 0; i < 36; i++) {
    drone.power_rail_up(blocks.stone, 1);
  }
 
  drone.rail_fwd(blocks.stone, 1);
  drone.turn(); // Svänger dronen åt höger
  drone.rail_fwd(blocks.stone, 1);

  // En slinga som gör en utförsbacke
  for (i = 0; i < 10; i++) {
    drone.rail_down(blocks.stone, 1);
  }
 
  drone.rail_fwd(blocks.stone, 1); // Kommer du ihåg vad denna gjorde?
 
  drone.turn();
  drone.rail_fwd(blocks.stone, 10);
 
  drone.turn();
  drone.rail_fwd(blocks.stone, 2);
 
  // Ännu en nerförsbacke. Glöm inte bort att testa!
  for (i = 0; i < 15; i++) {
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
  for (i = 0; i < 11; i++) {
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
```

# Utmaningar!
1. Kan du göra en coolare berg- och dalbana än mig?
1. Värt att nämna är att man bör vara vänd norrut när man anropar skriptet, annars flyger man ur i mitten någonstans när man åker. Kan du förbättra programmet så att vi slipper det problemet?

[Originalet hittas på CoderDojo Växjös hemsida](http://vaxjo.coderdojo.se/experiment/scriptcraft-rollercoaster/)
