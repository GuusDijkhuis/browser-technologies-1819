# Browser Technologies
## Use Case
`Ik wil de scores van een sportwedstrijd kunnen bijhouden tijdens de wedstrijd`
## Summary
Score is een applicatie waar je de verschillende gebeurtenissen van een voetbalwedstrijd kunt bijhouden.

![Score](/readme/img/screenshot.png)

## Table of contents
- [Use Case](#Use-Case)
- [Summary](#Install)
- [Live demo](#Live-Demo)
- [Installation](#Installation)
- [Concept](#Concept)
- [Progressive Enhancement](#Feature-Detection)
- [Feature Detection](#Feature-Detection)

## Live Demo
[Hier](https://guusdijkhuis.github.io/browser-technologies-1819/) is de link voor de live demo

## Installation
Als je mijn code wilt gebruiken kun je met de onderstaande mijn code clonen.
`git clone https://github.com/GuusDijkhuis/browser-technologies-1819.git`

## Concept
![Wireflow](/readme/img/wireflow.png)
Als je een score wilt bijhouden dan kunt u dat doen door de score aan te passen met de pijltjes. De score wordt meestal automatisch opgeslagen maar er kan ook een opslaan knop staan. De functional laag is gebouwd dat je met de knop de aangegeven scores kan opsturen naar de server. Als usable heb ik gedaan dat als Javascript aan staat het formulier automatisch wordt doorgegeven aan de server als er een verandering is in 1 van de inputfields. Als pleasurable heb ik ook nog de logo's toegevoegd die eigenlijk niet nodig zijn aangezien al de naam van het team in beeld staat. Daarnaast heb ik een pop-up gemaakt die verschijnt als een request wordt gestuurd naar de server.

## Features

#### Color
De features die ik heb aangepakt in mijn applicatie zijn onder andere de kleur. Ik heb de website met zo veel mogelijk contrast gemaakt. Ik heb het contrast ook getest met meerdere contrast checkers. Op `Color Review` wordt aangegeven dat voor zowel de headers en de text `AAA` is. Dit is de maximale score om contrast goed te hebben.
- [Contrast Checker 1](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=353C45)
- [Contrast Checker 2](https://color.review/check/FFFFFF-353C45)

#### Images
Als er geen images geladen kunnen worden dan kun je de `alt-text` zien die aangeeft om welk logo het gaat.

Images             |  No Images
:-------------------------:|:-------------------------:
![](/readme/img/IMG.png)  |  ![](/readme/img/no-IMG.png)

#### Javascript
Als Javascript het even niet doet kan de website nog steeds gebruikt worden doordat er dan een button verschijnt waardoor je de tussenstanden zelfstandig naar de server toe stuurt. Als Javascript het wel doet wordt dit automatisch gedaan en verdwijnt de button.

Javascript             |  No Javascript
:-------------------------:|:-------------------------:
![](/readme/img/JS.png)  |  ![](/readme/img/no-JS.png)

#### Mouse/trackpad
Mijn website is goed semantisch en daarom kan je met de tab op de juiste manier door de invoervelden gaan. Hij begint links bovenaan bij de score en gaat naar beneden om eerst het formulier van de thuisspelende ploeg in te vullen. Daarna gaat hij naar de uitspelende ploeg.

## Browsers
Ik heb mijn website grotendeels getest met Chrome omdat ik daar het meeste zelf mee werk. Maar ik weet dat Chrome ook het beste wordt ondersteund dus ben ik ook gaan kijken naar wat Firefox, Safari en Edge deden. Hieronder staan mijn bevindingen van de verschillende browsers

## Feature Detection
