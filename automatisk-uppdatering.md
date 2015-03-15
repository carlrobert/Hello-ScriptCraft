#Ladda ner senaste ScriptCraft automatiskt (laboration)

Vårt mål för övningen: 

1. Att ha ett litet program som automatiskt laddar ner senaste versionen av ScriptCraft, *scriptcraft.jar*
1. Programmet ska ligga i Minecraft-serverns mapp.
1. Felsäkert. Om det inte går att ladda ner någon ny version så ska den gamla versionen av scriptcraft.jar behållas.

##Vi testar oss fram
Vi tittar på sidan 
https://github.com/walterhiggins/ScriptCraft/releases
och ser en blå etikett som heter *Latest release*. Den leder till
https://github.com/walterhiggins/ScriptCraft/releases/latest Högerklicka på etiketten för att se länken.

Om vi följer den länken hamnar vi (i skrivande stund) på
https://github.com/walterhiggins/ScriptCraft/releases/tag/3.1.3

Vi testar att laddar ner *scriptcraft.jar* från den sidan, dvs.
https://github.com/walterhiggins/ScriptCraft/releases/tag/3.1.3/scriptcraft.jar

##Med programmet *curl* kan vi ladda ner från en webblänk
För att komma vidare behöver vi ett sätt att kunna ladda ner *scriptcraft.jar*, alltså utan att vi behöver sitta och klicka 
i webbläsaren.

Ladda ner och installera programmet [curl](http://curl.haxx.se/download.html) Till höger på sidan finns en innehållsförteckning där man lätt hittar till rätt nerladdning: Windows, Mac OS X, Linux.

När du installerat ska du kunna köra kommandot
```curl --remote-name https://github.com/walterhiggins/ScriptCraft/releases/download/3.1.3/scriptcraft.jar```

Vi ser att *scriptcraft.jar* bara är 392 tecken och att det innehåller ett meddelande om omdirigering: *You are being redirected*

Vi läser på litet mer på hjälpsidan för *curl* och
testar om curl:s *location*-flagga kan hjälpa oss att följa omdirigeringen. När vi följer länken via vår webbläsare så är det webbläsaren som följer omdirigeringen automatiskt men när vi använder *curl* måste vi tala om att det är så vi vill ha det.

```bash
curl --remote-name --location https://github.com/walterhiggins/ScriptCraft/releases/download/3.1.3/scriptcraft.jar
```

Nu ser det bättre ut. Vi kan öppna *scriptcraft.jar* t.ex. med [7-ZIP](http://www.7-zip.org/download.html) och se att den innehåller något som ser ut som ScriptCrafts filer.

##Sätt ihop bitarna till ett uppdateringskommando

Vi kan nu spara vårt nerladdningskommando för framtiden. Lägg det i en .bat-fil (Windows) eller .sh-fil (OS X/Linux).

Kan det hantera nerladdningsfel?

