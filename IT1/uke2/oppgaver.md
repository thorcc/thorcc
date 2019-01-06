# Oppgaver uke 2 - Innhold tilpasset ulike skjermstørrelser

### Media queries
Skrivemåte:  
```
@media(betingelse){
  selektor{...}
}
```

Eksempel:
Grid som er tre elementer i bredden over 700px, og to i bredden lik eller under 700px.

```
main{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media(max-width:700px){
  main{
    grid-template-columns:1fr 1fr;
  }
}

```

## Oppgaver - media query
1. Lag en nettside som skifter farge med bredden på vinduet. Bruk følgende breakpoints:  
  a. Gul når den er under 1400px  
  b. Grønn når den er under 1000px  
  c. Rød når den er under 800px  
  d. Blå når den er under 600px  

2. Skriv kode for en nettside som bytter bakgrunnsbilde i body-elementet når bredden på vinduet i nettleseren endres.
```
body{
  background-url("bilde.jpg");
}
```

3. Bruk grid og presenter hver kolonne med matretter og hva matrettene heter. Det skal være fire matretter i bredden i utgangspunktet. Bruk media queries til å sørge for at det blir først tre, så to, så til slutt bare en matrett i bredden.  

## Oppgaver flex
1. Lag en navigasjonsbar med 4 lenker. Sett den til display: flex; Og sørg for at menypunktene legger seg under hverandre når det blir for trangt i bredden.  

2. Lag et div-element som er en 16 piksler høy og bred flexbox. Inne i div-elementet legger du inn 3 nye elementet, og fordeler dem jevnt så det ser ut som en liten hamburger.  

3. Du har lært om både flex og grid. Hvilket fordeler og ulemper har de?
