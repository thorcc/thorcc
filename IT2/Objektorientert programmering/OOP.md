# Objektorientert programmering

**Objektorientert programmering** (**OOP**) er et [paradigme](https://no.wikipedia.org/wiki/Programmeringsparadigme) for programmering av datamaskiner ([Wikipedia](https://no.wikipedia.org/wiki/Objektorientert_programmering)).

I **OOP** løser vi oppgaver som skal løses ved hjelp av såkalte objekter. Et objekt i programmet representerer en forestilling av objektet i virkeligheten. For eksempel som et statsministerobjekt.

## Objekter

Ofte er det nyttig å lagre inforamsjon som hører naturlig sammen i objekter. Objekter består av attributter og tilhørende verdier.

```javascript
let statsminister = {
    fornavn: "Erna",
    etternavn: "Solberg",
    "parti": "Høyre",
    "interesser": ["Bærekraft","Sysselsetting","Norske interesser i FN", "Nordmenn må få flere barn","Justisministerposten"]
};
```

For å hente ut en verdi fra et objekt brukes .dot-notasjon.

```javascript
statminister.parti; // "Høyre"
statsminister.interesser[1] // "Sysselsetting"
```

Det er også mulig å legge funksjoner til et objekt. Slike funksjoenr kalles for metoder. Legg merke til `this` som henviser til "dette objektet".

```javascript
let justisminister = {
    fornavn: "Jøran",
    etternavn: "Kallmyr",
    parti: "Fremskrittspartiet",
    fulltNavn: function(){
        return this.fornavn + " " + this.etternavn;
    }
}
```

Metoder kan kalles opp ved .dot-notasjon.

```javascript
justisminister.fulltNavn(); // "Jøran Kallmyr"
```

## Klasser

Veldig ofte ønsker man å lage flere objekter. Da kan det være nyttig å lage seg en oppskrift på hvordan objektet skal se ut og hvilke egenskaper det skal ha. For å få til dette kan vi lage en *klasse*.

Legg merke til skrivemåten med stor bokstav i klassenavnet. Dette er vanlig skrivemåte når man definerer klasser. En klasse må ha en **constructor-funksjon** som kjøres når et objekt av klassen opprettes (instansieres). Metoder defineres inne i klasse-definisjonen.

```javascript
class Pizza{
    constructor(navn, ingredienser, pris){
        this.navn = navn;
        this.ingredienser = ingredienser;
        this.pris = pris;
    }
    // En metode som sier at pizzaen er klar.
    klar(){
        return "En " + this.navn + " er klar til henting."
    }
}
```

For å opprette objekter fra klassen brukes `new` før klassenavnet sammen med inputparametrene til constructor-funksjonen.

```javascript
let p1 = new Pizza("Hawaii",["Tomatsaus","Ost","Skinke","Ananas"],175);
let p2 = new Pizza("Fire årstider",["Ost","Skinke","Reker","Artiskokk","Sjampinjong"],180)
```

For å kjøre metoder på objektet brukes .dot-notasjon.

```javascript
p1.klar() // "En Hawaii er klar til henting."
```

---

Kilde: <https://github.com/fagstoff/IT2/blob/master/Fagtekster/Objekter_klasser.md>

