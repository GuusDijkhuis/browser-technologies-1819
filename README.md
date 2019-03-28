# Browser Technologies
## Use Case
>Ik wil de scores van een sportwedstrijd kunnen bijhouden tijdens de wedstrijd

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
Ik heb mijn website grotendeels getest met Chrome omdat ik daar het meeste zelf mee werk. Maar ik weet dat Chrome ook het beste wordt ondersteund dus ben ik ook gaan kijken naar wat Firefox, Safari en Edge deden.

## Feature Detection
Voor de feature detection heb ik mijn HTML, CSS en JS doorgespit op code die misschien niet kan werken op oudere browsers.

Voor HTML heb ik 1 fallback gemaakt omdat iedere tegenwoordige browser goede support heeft gebruik voor HTML5.
<br/>
<details>
  <summary>Main</summary>
  De main tag wordt niet goed gesupport door IE dus heb ik naar oplossingen gezocht en heb ik de `main` de onderstaande properties gegeven [1].
  <details>
    <summary>Code</summary>
    ```
    main {
        display: block
    }
    ```
  </details>
  <details>
    <summary>Bron</summary>
    [1](https://weblog.west-wind.com/posts/2015/jan/12/main-html5-tag-not-working-in-internet-explorer-91011)
  </details>
</details>

<br/>
In mijn CSS heb ik veel fallbacks gemaakt zodat mijn styling geen problemen geeft in verschillende browsers. Dit geld voor zowel oude als nieuwe browsers. Hieronder een lijst met de fixes die ik heb gebruikt voor CSS.
<br/>

<details>
  <summary>RGBA</summary>
  Ik kwam erachter dat ik veel RGBA gebruik om bepaalde kleuren weer te geven. Dit werkt echter niet goed op Inter Explorer 8 en ouder. In IE 5.5 en ouder wordt zelfs dan helemaal geen kleur getoond dus heb ik onderstaande fallback gemaakt om dit probleem op te vangen.
  <details>
    <summary>Code</summary>
    ```
    color: #eeeeee;
    color: rgba(238,238,238,1);
    ```
  </details>
</details>
<details>
  <summary>Vendor prefixes</summary>
  Prefixes zijn ervoor om elke browser ondersteuning te bieden voor bepaalde css functies die nog niet volledig worden ondersteund doordat deze nog in een testfase zitten. Ik heb bijvoorbeeld bij de transition een vendor prefix toegevoegd.
  <details>
    <summary>Code</summary>
    ```
    -webkit-transition: all .15s ease;
    -o-transition: all .15s ease;
    transition: all .15s ease;
    ```
  </details>
</details>
<details>
  <summary>Font fallback</summary>
  Fonts zijn hartstikke leuk om te gebruiken maar wat nou als deze niet geladen kan worden? Dan heb je een probleem dus daar moet je een fallback voor maken. Ik heb ervoor gekozen dat als de font niet geladen kan worden dat er altijd teruggevallen kan worden op de `sans-serif` stijl omdat de default style ook een `sans-serif` lettertype is.
  <details>
    <summary>Code</summary>
  ```
  font-family: "Roboto", sans-serif;
  ```
  </details>
</details>

<br/>
Tijdens het maken van de JavaScript code heb ik gelijk de code aangepast zodat deze ook werkt op de browsers die niet ES6 supporten zoals Internet Explorer.
<br/>

  <details>
    <summary>Arrow functions</summary>
    Ik ben zelf gewent om mijn code te schrijven middels arrow functions. Maar dit wordt niet ondersteund in oudere browsers dus heb ik de code aangepast zodat de functions op de oudere manier geschreven zijn.
    <details>
      <summary>Code</summary>
      ```
      inputArr.forEach(function(res) {
        res.addEventListener('change', pushData)
      })
      ```
    </details>
  </details>
  <details>
    <summary>Array.from</summary>
    Doordat ik met een `querySelectorAll` alle inputfields ophaal krijg ik een `nodeList` terug. Om hier door heen te loopen wilde ik een `forEach` gebruiken maar dit kan niet omdat het geen `array` is. Daarom moet ik van de `nodeList` omzetten. Dit had ik eerst gedaan met een `Array.from()` maar dit werkt dus niet met ES5 dus heb ik dit omgebouwd door onderstaande code.
    <details>
      <summary>Code</summary>
      ```
      const inputArr = Array.prototype.slice.call(allInputs)
      ```
    </details>
  </details>
</details>
