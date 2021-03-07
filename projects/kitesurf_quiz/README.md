Detta är skapat av Caroline Englund. Koden är gjord av Caroline. Där koden är hämtad ifrån annan källa anges direkt i koden. 

Det är en quiz app som är tänkt att vara till för personer som lär sig att kitesurfa vid en kitesurfing skolan ansluten till VDWS (tyska förbundet för vatten sport). Eleven kan här öva inför slutprovet i steget att få licens i kitesurfing. OBS! Frågorna i question_vdws_de.json och question_vdws_en.json är de officiella frågorna för kitesurfing licensen. Dessa får inte kopieras, spridas eller laddas upp någonstans! Frågorna i questions.json är än så länge ej väl genomtänkta utan kommer att uppdateras. För att förstå hur koden fungerar så är bra att kolla hur jag har byggt json filerna.

Jag har skapat json filerna och strukturen själv. Jag har struktureat koden och json filerna att det är enkelt att lägga till nya kategorier och frågor utan att allt för mycket behöver ändras. Övnings delen är tillför att öva införsluttestet. VDWS testet kan göras genom att verifera sig.

Filer:
index.html - Har syns grundstrukturen och de olika komponenterna.
questions.json - Här ligger frågerna för övnings delen
questions_vdws_de - de tyska frågorna (används inte i denna version)
questions_vdws_de - de engelska frågorna till slutprovet
style.css - styling av innehållet
helper.js - innehåller hjälpande funktioner
loader.js - styr sidan som kommer upp när appen startas och animationen av page loader
nav.js - styr navigationen
quiz.js - styr delen för övningsfrågor
vdws-quiz.js - styr delen för sluttestet


