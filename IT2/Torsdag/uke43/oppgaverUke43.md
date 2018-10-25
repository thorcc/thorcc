# Uke 42 - Funksjoner

### Ressurser

- Kode 2, kap. 5 Funksjoner
- [YT Spilleliste](https://www.youtube.com/watch?v=pbziQosyvQ0&list=PLJC9cL8YfNXqEIeA_PAvdpF5tIjPnX_3E)
- [Scrimba - Hva er funksjoner?](https://scrimba.com/p/pnnQQfk/cVGawSp)
- Ekstra:
    - [Scrimba - Kurs i webprogrammering: JavaScript](https://scrimba.com/playlist/pnnQQfk)
    - [Scrimba - Kurs i webprogrammering: HTML](https://scrimba.com/playlist/pa3ezuy)
    - [Scrimba - Kurs i webprogrammering: CSS](https://scrimba.com/playlist/pGQrYTk)

## Små oppgaver

### Oppgave 1
1. Lag funksjonen *storre(tall)* som returnerer teksten "større enn null" hvis tall er større enn 0, og "mindre enn null" hvis tall er mindre enn 0.
2. Utvid funksjonen slik at teksten "tallet er null" vises hvis tall er 0.

### Oppgave 2
- Lag funksjonen *finnAreal(h,b)*, som returnerer arealet av et rektangel med høyden h og bredden b.

### Oppgave 3
- Skriv noe tekst på en nettside, og lag funksjonen *endreStil(bakgrunnsFarge,skriftFarge,skriftStorrelse)*, som endrer stilen på nettsiden.  
- For eksempel skal *endreStil("DarkOrange","White",120);* sette bakgrunnsfargen til mørk oransj, tekstfargen til hvit og skriftstørrelsen til 120px.

### Oppgave 3b
- Lag en funksjon som legger til et div-element i body-elementet.
- function leggTilDiv(tekst,bakgrunnsfarge,skriftstorrelse){ din kode her }

## Større oppgaver (sammensatte opppgaver)

### Oppgave 4
- Gjett tallet! Lag et spill som lagrer et hemmelig tall mellom 1-100 i en variabel og spør brukeren om å gjette tallet. Gi beskjed til brukeren om tallet som ble gjettet var for høyt eller for lavt. Hvis brukeren gjetter feil skal han/hun få beskjed om å prøve på nytt.

Pseudokode:
````
1. En global variabel hemmeligTall, som er et tilfeldig tall mellom 1 og 100.
2. En global variabel gjett, som får verdien sin fra en prompt-boks
3. En while-løkke som repeterer kode helt så lenge gjett ikke er lik hemmelig tall.
    4. Hvis brukeren gjetter for lavt skal han få beskjed om at han har gjettet for lavt, og få muligheten til å gjette på nytt.
    5. Hvis brukeren gjetter for høyt skal han få beskjed om at han har gjettet for høyt, og få muligheten til å gjette på nytt.
6. Når while-løkken er ferdig har brukeren gjettet riktig, og han skal gå beskjed om at han har gjettet riktig.
```` 
- Ekstra: Bruk input-felt istedenfor for prompt.
- Ekstra 2: En film/bilde/musikk kommer når brukeren har klart oppgaven.

### Oppgave 5
- Lag et tegneprogram i javascript. Tips: Se koden fra oppgaven med å tegne sirkler i forrige uke.
- Ekstra: Legg til en mulighet for å velge farge/størrelse/form.

### Oppgave 6
- Stein-saks-papir!  
  - Skriv et program som tar inn et tilfeldig tall mellom 1-3 (1 = stein, 2 = saks, 3 = papir), og enten stein, saks eller papir fra bruker. Sammenlign valgene og gi en beskjed om hvem som vant.