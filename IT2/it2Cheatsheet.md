# IT2 - Cheatsheet

## Javascript
### Variabler og datatyper

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

### Document Object Model
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
mittEl.appendChilde(nyttEl);
`  