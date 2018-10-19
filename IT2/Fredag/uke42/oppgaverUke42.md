# Uke 42 - Funksjoner

### Ressurser

- Kode 2, kap. 5.5 Funksjoner med returverdi (s. 114 - 118)
- [YT Spilleliste](https://www.youtube.com/watch?v=pbziQosyvQ0&list=PLJC9cL8YfNXqEIeA_PAvdpF5tIjPnX_3E)
- [Scrimba - Hva er funksjoner?](https://scrimba.com/p/pnnQQfk/cVGawSp)
- Ekstra:
    - [Scrimba - Kurs i webprogrammering: JavaScript](https://scrimba.com/playlist/pnnQQfk)
    - [Scrimba - Kurs i webprogrammering: HTML](https://scrimba.com/playlist/pa3ezuy)
    - [Scrimba - Kurs i webprogrammering: CSS](https://scrimba.com/playlist/pGQrYTk)
### Oppgave 1
- Lag en funksjon som opphøyer et tall i andre. Kopier koden under inn i webstorm, og fyll inn det som mangler.
```javascript
function kvadrat(n){
 // En funksjon som returnerer n^2.
 // Inputparameter n: number
 // -- Bytt ut XXX under med riktig kode ---
    return XXX
    
}
//Test av funksjon:
console.log(kvadrat(4)); // Skal gi 16 i konsollen
console.log(kvadrat(17)); // Skal gi 289 i konsollen
```

## Oppgave 2
- Lag en funksjon som sjekker om et tall er et oddetall. Kopier koden under inn i webstorm, og fyll inn det som mangler.

```javascript
function erOddeTall(tall){
    // En funksjon om returnerer true hvis tall er oddetall, og false hvis n er partall
    // Inputparameter tall: number
    // -- Skriv din kode under her: --


}

//Test av funksjon:
console.log(erOddeTall(31)); // Skal gi true i konsollen
console.log(erOddeTall(52)); // Skal gi false i konsollen
```

## Oppgave 3
- Lag en funksjon som ganger sammen to tall. Kopier koden under inn i webstorm, og fyll inn det som mangler.

```javascript
function gange(n,m){
    // En funksjon om returnerer true hvis tall er oddetall, og false hvis n er partall
    // Inputparametre n: number, m: number
    // -- Skriv din kode under her: --
    

}
```

## Oppgave 4
- Bruk kvadrat funksjonen du lagde i oppgave 1 til å lage en ny funksjon som returnerer n^4.

```javascript
function iFjerde(tallet){
     // En funksjon som bruker funksjonen kvadrat(tallet), og returnerer tallet^4.
     // Input tallet: number
     // -- Skriv din kode under kode her: ---
 
    
}
```

## Oppgave 5
- En generell annengradsfunksjon kan skrives på formen ax^2 + bx +c.
Lag et program der en funksjon får inn a, b, c som innparameter. Den skal returnere alle nullpunkter til annengradsfunksjonen hvis de finnes. Hvis det ikke finnes noen nullpunkter skal funksjonen returnere teksten "Ingen løsning!"


## Oppgave 6
- Gjett tallet! Lag et spill som lagrer et hemmelig tall mellom 1-100 i en variabel og spør brukeren om å gjette tallet. Gi beskjed til brukeren om tallet som ble gjettet var for høyt eller for lavt. Hvis brukeren gjetter feil skal han/hun få beskjed om å prøve på nytt.


## Oppgave 7

  1. Lag en løkke som skriver ut de 10 første fibonacci-tallene
  2. Lag et canvas-element på nettsiden og lag en tegning som visualiserer fibonacci-tallene.

## Oppgave 8
- Lag et tegneprogram i javascript. Tips: Se koden fra oppgaven med å tegne sirkler i forrige uke.
- Legg til en mulighet for å velge farge.