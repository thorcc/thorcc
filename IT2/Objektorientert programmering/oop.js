const main = document.querySelector("main");

// Definerer en klasse forfatter
class Forfatter{
  // Konstruktor-funksjon som brukes for å opprette et objekt
  constructor(fornavn,etternavn,fodselsaar){
    this.fornavn = fornavn; // Setter parmeterverdien fornavn til attributtet fornavn
    this.etternavn = etternavn;
    this.fodselsaar = fodselsaar;
  }

  // Metode som kan kjøres på forfatter-objektet
  visForfatter(){
    main.innerHTML += `<p>${this.fornavn} ${this.etternavn} er født i ${this.fodselsaar}</p>`;
  }
  // Get-metode
  get fulltNavn(){
    return this.fornavn + " " + this.etternavn;
  }
}

// Lager et nytt forfatter objekt
let hamsun = new Forfatter("Knut","Hamsun",1885);
// Kjører metoden visForfatter() på hamsun-objektet
hamsun.visForfatter();


// Henter ut en attributtverdi fra objektet
console.log(hamsun.fodselsaar);

// Bruker en getmetode for å hente ut fullt navn
let hamsunFulltNavn = hamsun.fulltNavn; // Legg merke til at dette funksjonskallet er uten parenteser
console.log(hamsunFulltNavn);


let loe = new Forfatter("Erlend","Loe",1969);
loe.visForfatter();

let sandberg = new Forfatter("Per","Sandberg",1960);
sandberg.visForfatter();

