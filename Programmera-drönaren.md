#Programmera drönaren!

För information om hur man installerar servern och ScriptCraft se föregående sida, *Installera och kom igång!*

I ScriptCraft kan man programmera en så kallad drönare (drone på engelska) till att bygga saker i Minecraft. Här beskrivs hur man programmerar drönaren.

##Gör en mapp

Gör en mapp till dina program. Lägg mappen i *MinecraftServer/plugins/Scriptcraft/plugins*

##Bygg en husgrund

Öppna en texteditor och skriv in följande kod:

```javascript
// mitthus.js
var Drone = require('drone');

function mitthus() {
    this.box('41', 10, 1, 10);
}

Drone.extend('mitthus', mitthus);
```

Spara filen som *mitthus.js* i din nygjorda mapp.

Kör koden inifrån Minecraft genom att skriva

```javascript
/js mitthus()
```

Prova att göra husgrunden i ett annat material än guld. Välj ett annat ID-nummer än 41 från sidan Minecraft ID List. 
Spara filen efter att du ändrat. För att ändringan skall märkas i Minecraft, måste du köra kommandot

```javascript
/js refresh()
```

innan du kör ```/js mitthus()``` igen. Använd piltangenterna för att få fram gamla kommandon i Minecraft.

###Vad koden gör

Första raden talar om att vi tänker använda *Drone*.

På tredje raden definieras en funktion döpt till *mitthus*.
Det går bra att ge funktionen ett annat namn.
Efter funktionsnamnet skall det alltid finnas ett par parenteser, ```()```.
Därefter skriver man vad funktionen ska göra, mellan måsvingarna ```{}```.

På fjärde raden låter man drönaren använda metoden *box*. Ordet *this* refererar till drönarobjektet.

På sista raden anger man att kommandot ```/js mitthus()``` i Minecraft skall anropa funktionen *mitthus*.
Om du byter rad 8 till ```Drone.extend('hejsan', mitthus);```
så kör du programmet från Minecraft genom att skriva ```/js hejsan()```.

##Bygg ett hus

###Flytta drönaren

Drönaren är osynlig men befinner sig där du har muspekaren.
Det är vid muspekaren huset byggs. 
För att bygga ett hus av flera olika bitar måste du kunna flytta på drönaren. 
Nedan finns en lista på flyttkommandon.

* ```up(antalBlock)``` &ndash; flyttar upp drönaren. Koden up() flyttar drönaren ett block up. Koden up(5) flyttar drönaren 5 block upp.
* ```down(antalBlock)``` &ndash; flyttar ner drönaren.
* ```left(antalBlock)``` &ndash; flyttar drönaren åt vänster.
* ```right(antalBlock)``` &ndash; flyttar drönaren åt höger.
* ```fwd(antalBlock)``` &ndash; flyttar drönaren framåt.
* ```back(antalBlock)``` &ndash; flyttar drönaren bakåt.
* ```turn(antalVridningar)``` &ndash; vänder drönaren 90 grader åt höger. Koden ```turn(2)``` vänder 
drönaren två gånger åt höger så att den pekar i rakt motsatt riktning.

##Gör väggar och tak

Ändra koden till

```javascript
// mitthus.js
var Drone = require('drone');

function mitthus() {
    this.box('41', 10, 1, 10);  //guldgolv
    this.up();
    this.box('20', 10, 2, 10);  //glasväggar
    this.up(2);
    this.box('152', 10, 1, 10); //redstone-tak
}

Drone.extend('mitthus', mitthus);
```
Det som står efter // är så kallad kommentarer. Kommentarer är till för den som läser koden och exekveras inte.

Provkör programmet i Minecraft!

Mitt hus
Mitt hus
Gör en variabel

Om du vill ändra storlek på huset så att det är 5*5 block istället för 10*10 block, så måste du gå in och byta ut en siffra på sex olika ställen i koden. För att göra sådana ändringar enklare, kan du införa en variabel istället för att använda siffran 10.

Ändra koden till:

var Drone = require('../drone/drone').Drone;

function mitthus() {
    var storlek = 5;
    this.box('41', storlek, 1, storlek);  //guldgolv
    this.up();
    this.box('20', storlek, 2, storlek);  //glasväggar
    this.up(2);
    this.box('152', storlek, 1, storlek); //redstone-tak
}

Drone.extend('mitthus', mitthus);
Prova att ge variabeln storlek olika värden.

Låt användaren bestämma storleken

Istället för att ändra värdet på variabeln storlek inne i koden, kan du låta användaren ange storleken inifrån Minecraft. Detta gör du genom att ta bort variabeln och istället ge funktionen en så kallad parameter innanför parenteserna.

Ändra koden till:

var Drone = require('../drone/drone').Drone;

function mitthus(storlek) {
    this.box('41', storlek, 1, storlek);  //guldgolv
    this.up();
    this.box('20', storlek, 2, storlek);  //glasväggar
    this.up(2);
    this.box('152', storlek, 1, storlek); //redstone-tak
}

Drone.extend('mitthus', mitthus);
Kör koden inifrån Minecraft genom att exempelvis skriva:

/js mitthus(7)
Flera hus
Olika stora hus
Kedja ihop byggkommandona

Istället för att skriva varje byggkommando som d.kommando(); kan man kedja ihop allt byggande med hjälp av punkter. Koden kan skrivas som:

var Drone = require('../drone/drone').Drone;

function mitthus(s) {
    this.box('41', s, 1, s).up().box('20', s, 2, s).up(2).box('152', s, 1, s);
}

Drone.extend('mitthus', mitthus);
där parameternamnet har förkortats till s.

Man kan också använda en kedja av kommandon som är uppdelad på flera rader.

var Drone = require('../drone/drone').Drone;

function mitthus(s) {
    this
        .box('41', s, 1, s)
        .up()
        .box('20', s, 2, s)
        .up(2)
        .box('152', s, 1, s);
}

Drone.extend('mitthus', mitthus);
Skriv en villkorssats och ge ett felmeddelande

Obs: Skyltar fungerar ännu inte helt ut i CanaryMod.

När man låter användare ange parametervärden är det en god idé att kontrollera vad användaren faktiskt matat in, och eventuellt ge ett felmeddelande. Det kan exempelvis fungera så här:

Om användaren angett en storlek mindre än 3 
        ge ett felmeddelande 
annars 
        bygg huset
En sådan villkorssats kan du skriva med hjälp av en så kallad if-else-sats. Principen för en if-else-sats visas här:

if (villkor) {
    //kod som skall köras om villkoret är sant 
} else {
    //kod som skall köras om villkoret är falskt 
}
villkor skall vara ett logiskt uttryck, det vill säga ett uttryck som är antingen sant eller falskt, exempelvis en olikhet.

Felmeddelandet kan visas på en Minecraft-skylt. Drönaren kan göra en skylt med hjälp av metoden sign.

Ändra koden till:

var Drone = require('../drone/drone').Drone;

function mitthus(s) {
    if ( s < 3 ) {
        this.sign(['Huset skall','vara minst', '3*3 block stort'], 63);
    } else {
        this.box('41', s, 1, s).up().box('20', s, 2, s).up(2).box('152', s, 1, s);
    }
}

Drone.extend('mitthus', mitthus);
Provkör:

/js mitthus(2)
Felmeddelande
Felmeddelande
För mer information (på engelska) om skyltar se Drone.sign() method.

Skriv en loop

Om man vill göra ett flervåningshus, skulle man kunna använda algoritmen:

bygg ett hus 
gå upp ett steg
bygg ett hus 
gå upp ett steg
bygg ett hus 
o.s.v. För ett trevåningshus skulle sådan kod kunna se ut så här:

var Drone = require('../drone/drone').Drone;

function mitthus(s) {
    if ( s < 3 ) {
        this.sign(['Huset skall','vara minst', '3*3 block stort'], 63);
    } else {
        this.box('41', s, 1, s).up().box('20', s, 2, s).up(2).box('152', s, 1, s);
        this.up();
        this.box('41', s, 1, s).up().box('20', s, 2, s).up(2).box('152', s, 1, s);
        this.up();
        this.box('41', s, 1, s).up().box('20', s, 2, s).up(2).box('152', s, 1, s);
    }
}

Drone.extend('mitthus', mitthus);
Istället för att skriva samma kod tre gånger, kan man göra en loop. Ett sätt att göra en loop är att skriva en så kallad for-sats. En for-sats kan se ut på många olika sätt men en enkel princip är att använda koden:

for (var i = 0; i < antalUpprepningar; i += 1) {
    //kod som skall upprepas 
}
antalUpprepningar är antingen ett tal skrivet som en siffra, eller ett tal som är lagrat i en variabel eller parameter.

En for-sats som bygger ett hus tre gånger ser ut som i koden nedan:

var Drone = require('../drone/drone').Drone;

function mitthus(s) {
    if ( s < 3 ) {
        this.sign(['Huset skall','vara minst', '3*3 block stort'], 63);
    } else {
        for (var i = 0; i < 3; i += 1) {
            this.box('41', s, 1, s).up().box('20', s, 2, s).up(2).box('152', s, 1, s);
            this.up();
        }
    }
}

Drone.extend('mitthus', mitthus);
Raderna innanför for-satsens måsvingar körs tre gånger. Första gången är variabeln i=0, andra gången är i=1, tredje gången är i=2; därefter räknas i upp till 3 och loopen avslutas eftersom i inte längre är mindre än 3.

Du kan också införa ännu en parameter för att låta användaren ange antal våningar. I koden nedan kallas denna parameter för n och for-satsen utförs n gånger.

var Drone = require('../drone/drone').Drone;

function mitthus(s, n) {
    if ( s < 3 ) {
        this.sign(['Huset skall','vara minst', '3*3 block stort'], 63);
    } else {
        for (var i = 0; i < n; i += 1) {
            this.box('41', s, 1, s).up().box('20', s, 2, s).up(2).box('152', s, 1, s);
            this.up();
        }
    }
}

Drone.extend('mitthus', mitthus);
Provkör koden inifrån Minecraft:

/js mitthus(20, 4)
Felmeddelande
Höghus
Gör egna hus,

eller tunnlar, eller järnvägar, eller villa-kvarter, eller...

För mer information (på engelska) om drönaren, se ScriptCraft/API - Drone Plugin.

Minecraft fraktaler
Minecraft-fraktaler programmerade med ScriptCraft
