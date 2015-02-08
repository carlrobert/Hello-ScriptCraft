##Sten, Sax, Påse i Javascript – Vad gör all kod bakom dina Minecraft-moddar?

Sten > Sax > Påse > Sten

* Sten vinner över sax
* Sax vinner över påse
* Påse vinner över sten

Vårt spel kommer att bestå av 3 steg;

1.	Spelaren (du) gör dit val.
2.	Datorn gör sitt val.
3.	En funktion avgör vem som vinner. 

En variabel är ett objekt som kan tilldelas ett värde. T.ex. var x = 0. X har nu värdet 0. Se exemplet nedan för att förstå hur man tilldelar ett värde till en variabel.

![1](https://cloud.githubusercontent.com/assets/4598641/6096685/41be50e2-afa0-11e4-95f0-2c50da91da4f.png)

En JavaScript-funktion är ett kodblock utformad för att utföra en viss uppgift. En funktion körs när något ”kallar” på funktionen.

 

En if else sats avgör antingen eller, t.ex. antingen är jag äldre än 10 eller yngre än 10. Se exempel nedan, vi kommer använda oss av if else senare och det är därför bra att bli bekant med den. 


 


1.	Börja med att skapa en mapp på skrivbordet, döp den till Mitt Spel och för följande;
a.	I mappen skapar du en fil som heter spel.js
b.	Samt en fil som heter index.html
2.	I index.html behöver du nu ”koppla” spel.js så att spelet körs när du öppnar filen, lägg in följande;
 

3.	Dags att börja programmera, du måste först ta reda på vad du själv väljer. Till detta skapar vi en funktion som heter userChoice()
a.	Gör en funktion som heter userChoice och som returnerar prompt(’Vill du välja, sten, sax eller påse?’).

 

b.	Testa din funktion genom att ”kalla” på den. Detta gör du genom att skriva alert(userChoice());

 

c.	Öppna nu index.html i den webläsare, ser du följande?

 

-	Ja, bra jobbat! 
-	Nej, ingen fara fråga någon av mentorerna om hjälp. Det är helt ok att inte lyckas första gången.

4.	Dags att låta datorn göra sitt val, ja det är helt möjligt. Javascript har en inbyggd funktion som väljer en siffra mellan 0 – 1. Den kan exempelvis välja 0,5645454 detta kommer representera ett värde senare. Gör följande för att skapa en funktion som låter datorn avgöra vilket val den gjort.
a.	Skapa en funktion som heter computerChoice()
b.	I denna deklarerar du en variabel som heter randomNumber, denna variabeln tilldelar du värdet Math.random();
c.	Nu är det dags att skriva if else satser och returnera valet för att avgöra vilket val datorn gör. Exempelvis såhär;

 

Gör följande;
-	Om randomNumber är större eller lika (<=) med 0.34 returnerar funktionen sten.
-	Om randomNumber är större eller lika (<=) med 0.67 returnerar funktionen påse.
-	Om inget av följande returnera sax.

 

5.	Dags att skriva en funktion för att skriva ut ett meddelande, här kommer du kunna få 2 alternativ med hjälp av en if-else sats samt med hjälp av så kallad boolean, en boolean kan vara sann eller falsk. T.ex. Lakrits är gott, en del av oss tycker det är gott en del tycker det är mindre gott. Påståendet kan alltså vara sant eller falskt. Gör följande;
a.	Skapa en funktion som heter message och tar in 3 parametrar, human, computer och humanIsWinner.
b.	Nu ska du se till så att om humanIsWinner är sant ska följande funktionen returnera; 
-	'Du valde ' + human + ', datorn valde ' + computer + ', du vinner';
c.	Om humanIsWinner är falskt ska funktionen returnera;
-	'Du valde ' + human + ', datorn valde ' + computer + ', du förlorar';

 

6.	Nu är det dags att jämföra de ditt val och datorns val, detta för du med hjälp av en funktion som du kallar för compare(), compare ska dock ta 2 styck parametrar human och computer. Detta gör du genom att skriva compare (human, computer) där human representerar ditt val och computer representerar datorns val. Ta följande steg;
a.	Om human är lika med (===) computer returnera 'Det är lika, ingen av er vinner';
b.	Annars om (else if) human är lika med sten gå in i en nästlad if sats där;
-	Om computer är lika med sax returnerar du; message (human, computer, true);  - Detta då true står för att du vinner.
-	Annars (else) returnera message (human, computer, false); - Detta då false står för att du förlorar.
c.	Avsluta nu den nästlade if stasen.
d.	Annars om human lika med sax, gå in i en nästlad if sats där;
-	Om computer är lika med sten returnera message funktionen + false.
-	Annars returnerar du message funktionen + true.
e.	Avsluta nu den nästlade if stasen.
f.	Till sist gör du en sista koll med hjälp av en else if sats där om human är lika med påse samt en nästlad if else;
-	Om computer är lika med sten, säg till att funktionen massage returnerar ett värde där användaren vinner.
-	Annars returnerar du funktionen massage och säger till att användaren förlorar.
 

7.	Dags att köra vårt spel och se resultatet, skapa en funktion som heter play och i den ”kallar” du på alert(compare(userChoice(), computerChoice()));

	 

8.	Öppna nu index.html och testa spelet. Händer följande?


 
 

 
 
Fullständig kod utan kommentarer 

 








Fullständig kod med kommentarer 

 
