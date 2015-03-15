#Uppdatera scriptcraft.jar automatiskt

Vårt mål: 

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

Ladda ner och installera programmet [curl](http://curl.haxx.se/download.html)

curl -o scriptcraft.jar https://github.com/walterhiggins/ScriptCraft/releases/download/3.1.3/scriptcraft.jar

Vi ser att scriptcraft.jar bara är 392 tecken och att det innehåller ett meddelande om omdirigering: "You are being redirected"

curl:s *location*-flagga kan hjälpa oss med detta så vi testar.

curl -o scriptcraft.jar --location https://github.com/walterhiggins/ScriptCraft/releases/download/3.1.3/scriptcraft.jar

Nu ser det bättre ut. Vi kan öppna scriptcraft.jar t.ex. med 7-zip och se att den innehåller filer.

Installera curl.

Vi kan nu spara vårt nerladdningskommando för framtiden. Lägg det i en .bat-fil (Windows) eller .sh-fil (OS X/Linux).

