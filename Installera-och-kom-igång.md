#Installera och kom igång!

ScriptCraft är ett plugin till en Minecraft-server.
Med ScriptCraft kan du modda Minecraft genom att programmera i Javascript. 
ScriptCraft är speciellt gjord för nybörjare och innehåller bland annat en så kallad drönare (drone på engelska). 
Drönaren används för att bygga saker i Minecraft och du programmerar själv vad drönaren skall bygga. 

För att använda ScriptCraft måste du först sätta upp en egen server. 
ScriptCraft är gjort för att fungera med några olika Minecraft-servrar. Vi rekommenderar [SpigotMC](https://www.spigotmc.org/wiki/spigot-installation/) som bygger vidare på CraftBukkit.

Det finns instruktioner på engelska för att installera [ScriptCraft](http://scriptcraftjs.org/).
Det här en sammanfattning på svenska.

För att kunna modda Minecraft måste du ha ett Minecraft-konto. Alla andra program som behövs är gratis.

För några enkla programmeringsexempel, se nästa sida: [Programmera drönaren!](/Programmera-dr%C3%B6naren.md)

Här är sex steg för att komma igång. Resten av den här sidan hjälper dig med dem.

1. [Installera en texteditor](#ladda-ner-och-installera-en-texteditor)
2. [Installera Java](#java)
3. [Installera SpigotMC och ScriptCraft](#sätt-upp-servern)
4. [Gör ett startscript](#enklare-start-med-ett-startscript)
5. [Testa servern i Minecraft](#testa-servern-i-Minecraft)
6. [Prova några enkla byggkommandon](#några-enkla-byggkommandon)

##Ladda ner och installera en texteditor

* **Kör du Windows?** 
Ladda ner och installera [Notepad++](http://notepad-plus-plus.org/).

* **Kör du OS X (Mac)?**
Ladda ner och installera [Sublime Text](http://www.sublimetext.com/).

* **Kör du Linux?** Använd exempelvis *gedit* som följer med många Linux-distributioner.

När man skriver kod använder man inte vanliga ordbehandlare (som exempelvis Word) eftersom ordbehandlare formaterar texten. Det finns speciella utvecklingsmiljöer gjorda för programmering som ofta är svåra att använda för nybörjare. Det finns också enklare texteditorer som inte är så avancerade men lättanvända. Här får du förslag på en texteditor som inte är allt för avancerad men funkar bra för programmering.

##Java

Om du inte redan har Java installerat så [installera det](http://www.java.com/sv/)! Kör du Windows eller Linux så fortsätt till [Sätt upp servern](#sätt-upp-servern)

###Java-versioner på Mac

Efter att ha installerat den senaste versionen av Java (i skrivande stund version 8), kan det vara så att terminalen fortfarande bara hittar en gammal version. För att kolla vilken version terminalen hittar, skriv:

```
java -version
```

Om svaret blir en gammal version, skriv in följande:

```
'/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java' -version
```

Om svaret nu blir den senaste versionen, 
skriv in detta och fyll i lösenordet när *Password:* dyker upp:

```
sudo mv /usr/bin/java /usr/bin/java-1.6
```

Skriv sedan in:

```
sudo ln -s '/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java' /usr/bin/java
```

Testa sedan att skriva in ```java -version``` igen. Nu bör svaret bli den senaste versionen. Om inget funkar, kolla in [osx + java 7 = painfully easy](https://gist.github.com/johan/10590467).

##Sätt upp servern

* Gör en mapp *MinecraftServer* på något lämpligt ställe. 
* Ladda ner senaste versionen av [SpigotMC:s jar-fil](https://github.com/walterhiggins/ScriptCraft/tree/master/lib), om du inte vill bygga den själv förstås :)
* Lägg filen *spigot-n.n.n.jar* i mappen *MinecraftServer*.

Öppna terminalen (Mac/L inux) eller DOS-fönstret (Windows).
Gå till mappen *MinecraftServer* genom att använda kommandot *cd* (change directory).

* Man går in en mapp med namnet *EnMapp* genom att skriva *cd EnMapp*.
* Man går tillbaka (upp ett steg i filhierarkin) genom att skriva *cd ..*
* Man ser alla filer och mappar där man befinner sig genom att skriva *ls*
(Mac/Linux) eller *dir* (Windows).

När du befinner dig i mappen *MinecraftServer*, skriv:

```
java -Xmx1024M -jar spigot-n.n.n.jar
```

Första gången du kör detta kommandon skapas ett antal mappar och filer. 
En av filerna som skapas är *eula.txt*. Öppna *eula.txt* med en texteditor och acceptera villkoren genom att ändra nedersta raden till:

```
eula=TRUE
```

Spara filen.

Hämta senaste versionen av filen
[scriptcraft.jar](https://github.com/walterhiggins/ScriptCraft/releases)
och placera den *MinecraftServer/plugins*. Kör kommandot igen:

```
java -Xmx1024M -jar spigot-n.n.n.jar
```

Nu startar servern och det görs en ny mapp *scriptcraft* i mappen *MinecraftServer*.

Avsluta servern genom att skriva *stop*.
Avsluta alltid servern på detta vis, annars kan du skada filen som innehåller din Minecraftvärld.

##Enklare start med ett startscript

För att på ett enkelt sätt kunna starta servern behöver du ett startscript.

###Windows

Öppna Notepad++ eller en annan texteditor och klistra in följande kod.
```
:start
java -Xmx1024M -jar spigot-1.8.8.jar
pause
goto :start
```
Om din serverfil inte heter *spigot-n.n.n.jar*
så byt ut filnamnet till rätt filnamn.

Spara filen som *run.bat* i mappen MinecraftServer.

Starta servern genom att dubbelklicka på *run.bat*. Fortsätt sedan att [testa servern i Minecraft](#testa-servern-i-minecraft).

###OS X (Mac)

Öppna Sublime Text (eller en annan texteditor) och klistra in följande kod.

```bash
#!/bin/bash
cd "$( dirname "$0" )"
java -jar spigot-n.n.n.jar -Xmx1024M
```

Om din serverfil inte heter *spigot-n.n.n.jar* så byt ut filnamnet (den gröna texten) till rätt filnamn.

Spara filen som *start_server.command* i mappen *MinecraftServer*.

Ändra behörigheten på startscriptet så att det blir körbart. 
Skriv in följande kommando i terminalen: ```chmod a+x start_server.command```

Starta servern genom att dubbelklicka på *start_server.command*. Fortsätt sedan att [testa servern i Minecraft](#testa-servern-i-minecraft).

###Linux

Öppna *gedit* (eller en annan texteditor) och klistra in följande kod:

```bash
#!/bin/sh
BINDIR=$(dirname "$(readlink -fn "$0")")
cd "$BINDIR"
java -jar spigot-n.n.n.jar -Xmx1024M
```

Om din serverfil inte heter *spigot-n.n.n.jar* så byt ut filnamnet (den gröna texten) till rätt filnamn.

Spara filen som *start_server.sh* i mappen *MinecraftServer*.

Ändra behörigheten på startscriptet så att den blir körbar.
Skriv in följande kommando i terminalen: *chmod +x start_server.sh*

Starta servern genom att skriva *server.sh* i terminalen.

##Testa servern i Minecraft

1. Starta servern.
1. Gör dig själv till serveroperatör genom att skriva *op spelarnamn* i konsollen.
Ordet spelarnamn skall bytas mot ditt eget spelarnamn i Minecraft.
1. Starta Minecraft.
1. Välj rätt version av Minecraft.
  1. Välj Edit Profile i Minecraft och välj sedan en version som passar servern efter Use version.
  1. Spara profilen.
1. Klicka på Play och välj Multiplayer.
1. Klicka på Add server.
1. Välj ett servernamn vilket som helst och skriv in localhost under Server Address.
1. Börja spela på den nya servern.
1. Klicka på t för att få upp en textrad som man kan skriva på. Skriv
*/js 1+1*
1. Om svaret *2.0* dyker upp så har du lyckats köra din första Javascript-kod i Minecraft!

## Några enkla byggkommandon

Alla byggblock i Minecraft har ett id-nummer. På sidan [Minecraft ID List](http://minecraft-ids.grahamedgecombe.com/) finns en fullständig lista. Exempelvis har guld id-nummer 41 och röd ull id-nummer 35:14.

Prova att skriva in kommandona:

```javascript
/js box('41')
/js box('35:14')
```

Ett rätblock har en bredd, ett djup och en höjd. Gör ett rätblock genom att skriva kommandot:
```/js box('41', 3, 5, 10)```
Hur gör man ett rätblock av röd ull som är 2 block bred, 100 block hög och 1 block djupt? Testa dig fram!

![Pelare av röd ull](https://cloud.githubusercontent.com/assets/4598641/6613915/90f4effc-c893-11e4-8a4b-d69aed0158ef.png)

Det finns även kommandon för att göra cylindrar. Prova kommandona:

```javascript
/js cylinder('41', 3, 5)
/js cylinder0('41', 5, 3)
```

Du kan återanvända kommandon som du skrivit. När textraden visas trycker du på pil upp eller pil ned för att se gamla kommandon. Sedan kan du förflytta dig längs ett kommando med hjälp av högerpil och vänsterpil.

Hur gör man en ihålig guldcylinder som har radien 10 och höjden 2?

![Guldcylindrar i skymningen](https://cloud.githubusercontent.com/assets/4598641/6613916/90f59cc2-c893-11e4-9781-c335e7e590d0.png)

Om man vill göra tak till hus kan man använda sig av ett prisma. Prova kommandona:

```javascript
/js prism('35:14', 6, 10)
/js prism0('35:14', 15, 5)
```

###Färdiga program

I mappen *plugins/scriptcraft/plugins/drone/contrib*
finns exempelprogram som olika användare gjort. 
Prova några av programmen genom att skriva:

```javascript
/js rainbow(30)
/js maze(5, 7)
/js dancefloor(10, 8)
```

Öppna något av programmen i texteditorn och betrakta koden!

Om du vill göra ett längre program själv, måste du skriva det i texteditorn, spara filen, och sedan köra programmet inifrån Minecraft. Se nästa sida, Programmera drönaren!, för mer information.

*Baserad på https://github.com/malinc/Modda-Minecraft-med-Scriptcraft*
