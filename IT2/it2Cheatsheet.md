# IT2 - Cheatsheet

## Javascript
### Variabler og datatyper

**Number**
```
let mittTall = 72; // Number
```

**String**
```
let minTekst = "tekst her"; // String
```

**Boolean**
```
let minBoolean = true; // Boolean, enten true eller false
```

**Array**
```
let minArray = ["hei", 56, "ja"];
```

**Object**
```
let mittObjekt = {
    navn: "Kåre",
    alder: 21
}
```

### Document Object Model
Henter HTML-element med angitt id:
```
document.getElementByID("id");
```
Henter første element med angitt selektor:
```
document.querySelector("CSS-selektor");
```
Henter alle elementer med angitt selektor og plasserer de i en array:
````
document.querySelectorAll("CSS-selektor");
````
