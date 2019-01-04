# IT2 - Cheatsheet

# Javascript


## Variabler og datatyper

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

## Document Object Model
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

## Math-objektet

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

## Canvas

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

## If-setninger

``` javascript
if(betingelse){
    //kode som kjøres hvis betingelsen er sann
}
```

``` javascript
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


## Løkker

``` javascript
while (betingelse) {
 // kode som kjøres så lenge betingelsen er sann
}
```

``` javascript
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

## Funksjoner
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

##Arrayer

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
``` javascript
let mineTall = [2, 103, 1, 14];
function sammenlignTall (a, b) {
 return a – b;
}
mineTall.sort(sammenlignTall);
```

## Objekter

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

## Hendelser

```
mittEl.hendelse = minFunksjon;
```

```
mittEl.hendelse = function(event){
    //Kode som kjøres ved hendelse
}
```



|Utvalgte hendelser||
|--------|:-------------|
|onclick |Et trykk med musepekeren |
|onkeydown|En tast trykkes|
|onmousemove|Musepekeren beveges|
|onmouseout|Musepekeren forlater et element|
|onmouseover|Musepekeren beves over et element|
|oninput|Et input-element endres|
|onchange|Et select-element endres|

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

## Diverse
Link til javascript-fil i HTML-kode:  
`<script src="filnavn.js"></script>`
