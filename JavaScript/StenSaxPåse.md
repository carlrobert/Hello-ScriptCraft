#Sten, Sax, Påse i Javascript – Vad gör all kod bakom dina Minecraft-moddar?

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

![2](https://cloud.githubusercontent.com/assets/4598641/6098352/1be867d6-afdc-11e4-9cf7-1ff2393cfbfc.png)

En if else sats avgör antingen eller, t.ex. antingen är jag äldre än 10 eller yngre än 10. Se exempel nedan, vi kommer använda oss av if else senare och det är därför bra att bli bekant med den. 

![3](https://cloud.githubusercontent.com/assets/4598641/6098353/25435f02-afdc-11e4-9ec9-2bea912f0eec.png)

1.	Börja med att skapa en mapp på skrivbordet, döp den till *Mitt Spel* och gör följande;
  1.	I mappen skapar du en fil som heter spel.js
  2.	Samt en fil som heter index.html
2.	I index.html behöver du nu ”koppla” spel.js så att spelet körs när du öppnar filen, lägg in följande;
![4](https://cloud.githubusercontent.com/assets/4598641/6098354/2548a52a-afdc-11e4-9250-b7f454b0c933.png)
3.	Dags att börja programmera, du måste först ta reda på vad du själv väljer. Till detta skapar vi en funktion som heter userChoice()
  1.	Gör en funktion som heter userChoice och som returnerar prompt(’Vill du välja, sten, sax eller påse?’).
  ![5](https://cloud.githubusercontent.com/assets/4598641/6098355/2f6bbdb2-afdc-11e4-8df6-31a200dbb858.png)
  2.	Testa din funktion genom att ”kalla” på den. Detta gör du genom att skriva alert(userChoice());
  ![6](https://cloud.githubusercontent.com/assets/4598641/6098357/2f6cfe3e-afdc-11e4-9e71-1b2c99f76e77.png)
  3.	Öppna nu index.html i den webläsare. Ser du följande?  
  ![7](https://cloud.githubusercontent.com/assets/4598641/6098356/2f6c29be-afdc-11e4-965a-a28c69966f12.png)
  *	Ja: bra jobbat! 
  *	Nej: ingen fara fråga någon av mentorerna om hjälp. Det är helt ok att inte lyckas första gången.

4.	Dags att låta datorn göra sitt val, ja det är helt möjligt. Javascript har en inbyggd funktion som väljer en siffra mellan 0 och 1. Den kan exempelvis välja 0,5645454 detta kommer representera ett värde senare. Gör följande för att skapa en funktion som låter datorn avgöra vilket val den gjort.
  1.	Skapa en funktion som heter computerChoice()
  2.	I denna deklarerar du en variabel som heter randomNumber, denna variabeln tilldelar du värdet Math.random();
  3.	Nu är det dags att skriva if else satser och returnera valet för att avgöra vilket val datorn gör. Exempelvis såhär;    	![8](https://cloud.githubusercontent.com/assets/4598641/6098358/2f6de0f6-afdc-11e4-9692-177895e05c1c.png)  
  Gör följande:
  4.	Om randomNumber är större eller lika (<=) med 0.34 returnerar funktionen sten.
  5.	Om randomNumber är större eller lika (<=) med 0.67 returnerar funktionen påse.
  6.	Om inget av ovanstående, returnera sax.

![9](https://cloud.githubusercontent.com/assets/4598641/6098359/2f6f2e20-afdc-11e4-907a-8d3daed623aa.png)
 
5.	Dags att skriva en funktion för att skriva ut ett meddelande, här kommer du kunna få 2 alternativ med hjälp av en if-else sats samt med hjälp av så kallad boolean, en boolean kan vara sann eller falsk. T.ex. Lakrits är gott, en del av oss tycker det är gott en del tycker det är mindre gott. Påståendet kan alltså vara sant eller falskt. Gör följande;
  a.	Skapa en funktion som heter message och tar in 3 parametrar, human, computer och humanIsWinner.
  b.	Nu ska du se till så att om humanIsWinner är sant ska följande funktionen returnera *'Du valde ' + human + ', datorn valde ' + computer + ', du vinner'*
c.	Om humanIsWinner är falskt ska funktionen returnera *'Du valde ' + human + ', datorn valde ' + computer + ', du förlorar'*

![10](https://cloud.githubusercontent.com/assets/4598641/6098361/36937044-afdc-11e4-8c23-dc4ca716adb7.png)
 
6.	Nu är det dags att jämföra de ditt val och datorns val, detta för du med hjälp av en funktion som du kallar för compare(), compare ska dock ta 2 styck parametrar human och computer. Detta gör du genom att skriva compare (human, computer) där human representerar ditt val och computer representerar datorns val. Ta följande steg;
  1.	Om human är lika med (===) computer returnera 'Det är lika, ingen av er vinner';
  2.	Annars om (else if) human är lika med sten gå in i en nästlad if sats där;
    *	Om computer är lika med sax returnerar du; message (human, computer, true);  - Detta då true står för att du vinner.
    *	Annars (else) returnera message (human, computer, false); - Detta då false står för att du förlorar.
  3.	Avsluta nu den nästlade if stasen.
  4.	Annars om human lika med sax, gå in i en nästlad if sats där;
    *	Om computer är lika med sten returnera message funktionen + false.
    *	Annars returnerar du message funktionen + true.
  5.	Avsluta nu den nästlade if stasen.
  6. Till sist gör du en sista koll med hjälp av en else if sats där om human är lika med påse samt en nästlad if else;
    *	Om computer är lika med sten, säg till att funktionen massage returnerar ett värde där användaren vinner.
    *	Annars returnerar du funktionen massage och säger till att användaren förlorar.

![11](https://cloud.githubusercontent.com/assets/4598641/6098362/36b2ca48-afdc-11e4-9b93-f785f768b9d5.png)
 
7.	Dags att köra vårt spel och se resultatet, skapa en funktion som heter play och i den ”kallar” du på alert(compare(userChoice(), computerChoice()));

![12](https://cloud.githubusercontent.com/assets/4598641/6098363/36cd396e-afdc-11e4-9612-5316c121411f.png)
	 
8.	Öppna nu index.html och testa spelet. Händer följande?

![7](https://cloud.githubusercontent.com/assets/4598641/6098356/2f6c29be-afdc-11e4-965a-a28c69966f12.png)

![13](https://cloud.githubusercontent.com/assets/4598641/6098364/36cecf4a-afdc-11e4-9cb9-661b196c3e08.png)

![14](https://cloud.githubusercontent.com/assets/4598641/6098365/36d253fe-afdc-11e4-827c-1880b794aaf1.png)


##Fullständig kod utan kommentarer 
![15](https://cloud.githubusercontent.com/assets/4598641/6098366/36d39368-afdc-11e4-9991-fc488dc157b2.png)

##Fullständig kod med kommentarer 

![16](https://cloud.githubusercontent.com/assets/4598641/6098367/36d852b8-afdc-11e4-9382-526b10a0e786.png)
 
[PDF](https://gitprint.com/carlrobert/Hello-ScriptCraft/blob/master/JavaScript/StenSaxP%C3%A5se.md)
