# IT2 - cheatsheet v. 2.0

## Programmering

###  Variabler og datatyper

Number:
`
let mittTall = 72; // Number
`

String:
`
let minTekst = "tekst her"; // String
`

Boolean:
`
let minBoolean = true; // Boolean, enten true eller false
`

Array:
`
let minArray = ["hei", 56, "ja"];
`

Object:

```
let mittObjekt = {
    navn: "Kåre",
    alder: 21
}
```

### Interaksjon med nettsiden (Document Object Model)

Henter HTML-element med angitt id:  
`
document.getElementByID("id");
`  

Henter første element med angitt selektor:  
`
document.querySelector("CSS-selektor");
`

Henter alle elementer med angitt selektor og plasserer de i en array:  
`
document.querySelectorAll("CSS-selektor");
`

Endrer innholdet i et HTML-element:  
`
mittEl.innerHTML = "..."
`

Legger til et nytt attributt:  
`
mittEl.setAttribute("attributtnavn","verdi");
`

Legger klasse til et HTML-element:  
`
mittEl.className = "klasse";
`  

Angi CSS-egenskaper for HTML-element:  
`
mittEl.style.backgroundColor = "..";
`

Lager et nytt HTML-element:   
`
let nyttEl = document.createElement("HTML-tagg");
`  
(Dette elementet dukker ikke opp på nettsiden, det må legges til i et eksisterende HTML-elementet, se under)

Legger til et nytt HTML-element i et eksisterende HTML-element:  
`
mittEl.appendChild(nyttEl);
`  

### Math-objektet

Tilfeldig tall mellom 0 og 1:  
`
Math.random();
`

Avrunding:  
`
Math.floor(tall); // Runder ned
`  
`
Math.ceil(tall); // Runder opp
`

PI:  
`
Math.PI;
`

### Canvas

Henter et canvas-element:  
`let canvas = document.getElementByID("id til canvas")`

Angir tegnekontekst:  
`
ctx = canvas.getContext("2d");
`

Tegner et fylt rektangel:  
`
ctx.fillRect(x, y, bredde, høyde);
`

Tegner omrisset av et rektangel:  
`
ctx.strokeRect(x, y, bredde, høyde);
`

Fjerner et rektangel fra tegneområdet:  
`
ctx.clearRect(x, y, bredde, høyde);
`

Tegner en sirkel:  
`
ctx.arc(x, y, radius, startvinkel, sluttvinkel);
`

Legger til tekst:  
`
ctx.fillText(“tekst”, x, y) ;
`

Starter en ny path  
`
ctx.beginPath();
`

Flytter «pennen» til punktet (x, y):  
`
ctx.moveTo(x, y);
`

Trekker en linje til punktet (x, y):  
`
ctx.lineTo(x, y);
`

Tegner opp linjen som er trukket:  
`
ctx.stroke();
`

Fyller linjen som er trukket:  
`
ctx.fill();
`

Setter fyllfarge:  
`
ctx.fillStyle = “…”;
`

Bestemmer omrissfarge:  
`
ctx.strokeStyle = “…”;
`

Bestemmer linjetykkelse:  
`
ctx.lineWidth = “…”;
`

### If-setninger

```javascript
if(betingelse){
    //kode som kjøres hvis betingelsen er sann
}
```

```javascript
if(betingelse){
    //kode som kjøres hvis betingelse1 er sann
}
else if (betingelse 2) {
    //kode som kjøres hvis betingelse2 er sann og betingelse1 er usann
}
else {
  //kode som kjøres hvis betingelse1 og betingelse2 er usanne
}
```

### Løkker

```javascript
while (betingelse) {
 // kode som kjøres så lenge betingelsen er sann
}
```

```javascript
for (start; betingelse; endring) {
 // kode som kjøres så lenge betingelsen er sann
}
```

Finner egenskapene i et objekt:  

```
for (let egenskap in objekt) {
 console.log(egenskap);
}
```

Finner verdiene til egenskapene i et objekt

```
for (let egenskap in objekt) {
 console.log(objekt[egenskap]);
}
```

### Funksjoner

Enkel funksjon:  

```
function funksjonsNavn() {
 …
}
```

Funksjon med argumenter:

```
function funksjonsNavn(arg1, arg2, …) {
 …
}
```

Funksjoner kan avsluttes og returnere verdier med nøkkelordet `return`.

### Arrayer

Vi bruker hakeparentes for å lage en array:  
`let minArray = [];`

Legger til verdi i array:
`minArray.push("Dette legges til sist i arrayen");

Finner lengden til en array:  
`
minArray.length;
`  

Går gjennom verdiene i en array:

```
for (let i = 0; i < minArray.length; i++) {
 console.log(minArray[i]);
}
```

Sortere en array med tall:

```javascript
let mineTall = [2, 103, 1, 14];
function sammenlignTall (a, b) {
 return a – b;
}
mineTall.sort(sammenlignTall);
```

### Objekter

Vi bruker krøllparenteser for å lage et objekt:

```
let mittObjekt = {
    navn: "Kåre",
    alder: 21
}
```

For å endre verdien til en egenskap i et objekt:
`mittObjekt.egenskap = "ny verdi";`
Alternativt:
`mittObjekt["egenskap"] = "ny verdi";`

### Hendelser

```
mittEl.hendelse = minFunksjon;
```

```
mittEl.hendelse = function(event){
    //Kode som kjøres ved hendelse
}
```



| Utvalgte hendelser |                                   |
| ------------------ | :-------------------------------- |
| onclick            | Et trykk med musepekeren          |
| onkeydown          | En tast trykkes                   |
| onmousemove        | Musepekeren beveges               |
| onmouseout         | Musepekeren forlater et element   |
| onmouseover        | Musepekeren beves over et element |
| oninput            | Et input-element endres           |
| onchange           | Et select-element endres          |

**Alternativ skrivemåte:**

Legger til en lytter (her etter en click-hendelse):  
``
mittEl.addEventListener(“click”, minFunksjon);
``

Tar bort en lytter:  
``
mittEl.removeEventListener(“click”, minFunksjon);
``  

(I denne skrivemåten skrives hendelser uten *on* først.)

### Lyd og video

#### Video

Video i HTML:

```html
<video id="minFilm" src="video/minVideo.mp4" controls autoplay muted></video>
```

OBS! For at autoplay skal fungere må lyden være *muted*.

Video i Javascript:

```javascript
const minFilm = document.querySelector("#minFilm"); // Referer til et html-element med video-tag

window.onclick = function(){
  minFilm.play(); // Videoen spilles av når brukeren trykker på nettleservinduet.
}

```



#### Lyd

s.190 - 195

Lyd i HTML:

```html
<audio src="lyder/minLyd.mp3" controls loop></audio>
```

OBS! Autoplay fungerer ikke lenger i Chrome og Firefox! Derfor må lyd fikses enten med javascript eller med å ha med *controls* html-taggen, slik som over.

Lyd i Javascript:

```javascript
let lyd = new Audio();
lyd.src = "minLyd.mp3";

window.onclick = function(){
  lyd.play(); // Lyden spilles av når brukeren trykker på nettleservinduet.
}

```



###Diverse

 Link til javascript-fil i HTML-kode:  
`<script src="filnavn.js"></script>`

 Link til css-fil i HTML-kode:  
`    <link rel="stylesheet" href="filnavn.css">`

### Tips

#### Skjule/vise HTML-elementer

For å skjule HTML-elementer kan `display: none;` brukes i CSS. For å vise disse igjen på nettsiden kan en bruke`mittElement.style.display = "block";`. Eksempel:

```html
<html>
  <head>
    <style>
      #mittElement{
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="mittElement">
    	<p>Dette elementet er skjult</p>
    </div>
    <button id="btnVis">Vis overskrift</button>
  </body>
  <script>
  	const btnVis = document.querySelector("#btnVis");
    const mittElement = document.querySelector("#mittElement")
    btnVis.onclick = function(){
      mittElement.style.display = "block";
    }
  </script>
</html>
```





## Planlegging og dokumentasjon

### Dokumentasjon

s. 328 - 337

Dokumentasjon deles inn i to hoveddeler, **produktdokumentasjon** og **teknisk dokumentasjon**.

#### Produktdokumentasjon

s. 328 - 332

En dokumentasjon av brukerens ønsker og behov. Deles inn i *funksjonelle krav* og *ikke-funksjonelle krav*. Hvor **funksjonelle krav** er krav til programmets funksjonalitet, og leveres ofte i form av skisser, user case eller brukerhistorier. **Ikke-funksjonelle krav** kan være krav til backup, responstid, stabilitet, kompabilitet osv.

#### Teknisk dokumentasjon

s. 333-336   

Eksempler på teknisk dokumentasjon er kommentarer, flytdiagram og pseudokode. Det kan brukes for å forklare idéer til andre utviklere, eller være en del av din egen planlegging.

##### Kommentarer

s. 333

*Javascript*:

```// Kommentarer på en linje```

```javascript
/*
	Kommentarer over 
	flere linjer
*/
```

*HTML*:

```html
<!--- Kommentar i HTML-kode --->
```

*CSS*:

```
/* Kommentar i CSS (style) */
```

##### Pseudokode

s. 334

En uformell beskrivelse av gangen i et program eller en algoritme. For eksempel:  

La oss si at vi har et register med alle lønnsmottagere i Norge og ønsker å beskrive en metode som genererer to lister med henholdsvis høyt- og lavtlønnede arbeistakere. Denne metoden kan beskrives i pseudokode som vist under.

```
Tøm listen med lavtlønnede
Tøm listen med høytlønnede
For hver lønnsmottaker:
	Hvis personen tjener under 200000:
		Legg inn i listen over lavtlønnede
	Hvis personen tjener over 500000:
		Legg inn i listen over høytlønnede
```

Kilde: snl.no/pseudokode

##### Flytdiagram

s. 335

Et diagram som brukes til å vise flyten i et program. Diamanter er tester, firkanter er gjøremål. Eksempel:

![Flytdiagram](/Users/thorchr/Dropbox/GitHub/thorcc.github.io/IT2/simple-flowchart.svg)