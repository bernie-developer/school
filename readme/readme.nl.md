# School Project Hub

[Español](readme.es.md) • [English](../readme.md) • **Nederlands**

Deze repository bevat interactief leermateriaal voor kinderen, gestructureerd rond schoolvakken. Momenteel ligt de focus op het leren van Engels (getallen, grammatica en woordenschat), oorspronkelijk ontwikkeld voor jonge leerlingen (bijv. op een school in Chili), maar bruikbaar in elke context.

## Wat zit erin?

Het project fungeert als een hub (startpagina) met verschillende interactieve modules:

- **index.html**: Een visueel aantrekkelijke hoofdpagina om door de verschillende modules te navigeren. Ondersteunt automatische taaldetectie (Engels, Spaans, Nederlands) met de mogelijkheid om handmatig te wisselen via knoppen.
- **english/english-numbers.html**: HTML-pagina met een kleurrijke tabel van 1-20. Bevat interactieve elementen voor jonge kinderen.
- **english/english-numbers-quiz.html**: Een willekeurige quiz waarbij leerlingen het getal typen dat hoort bij een Engels woord.
- **english/talent-test.html**: Een mini-test gericht op grammatica en actiewoorden (bijv. likes/doesn't like).

## Visie & Architectuur

Het doel is om dit portaal uit te breiden naar een platform dat automatisch toetsen of quizzen kan genereren op basis van schoolmateriaal (bijv. handboeken). De architectuur is erop gericht om in de toekomst te integreren met AI-tools (zoals LLM's via API's) om programmatisch pedagogische content, quizzen en multimediamateriaal te genereren.

De projectstructuur is zo ontworpen dat deze makkelijk gelezen kan worden door AI-tools (zoals Gemini CLI/MCP) voor hulp bij code, contentcreatie en onderhoud.

## Installatie

Download de bestanden en open `index.html` in je browser.

## Technische details

```
- Vanilla JavaScript & HTML/CSS (Tailwind voor styling)
- LocalStorage voor het opslaan van taalvoorkeuren en simpele statussen
- Geen complexe build tools nodig voor de frontend
- Werkt offline
```

## Browser support

Getest op moderne browsers (Chrome, Firefox, Safari). Zou moeten werken op alle redelijk moderne systemen.

## Licentie

Niet voor commercieel gebruik. Naamsvermelding verplicht bij gebruik.

---
*Laatste update: Mei 2026*