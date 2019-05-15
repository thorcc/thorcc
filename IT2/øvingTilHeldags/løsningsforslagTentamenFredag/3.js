const divDeltakerReg = document.querySelector("#divDeltakerReg");
const btnReg = document.querySelector("#btnReg");
const inpReg = document.querySelector("#inpReg");
const divAntall = document.querySelector("#divAntall");
const ulDeltakere = document.querySelector("#ulDeltakere");
const btnStart1 = document.querySelector("#btnStart1");
const btnStart2 = document.querySelector("#btnStart2");
const btnResultat = document.querySelector("#btnResultat");

const divRunde1 = document.querySelector("#divRunde1")
const divRunde2 = document.querySelector("#divRunde2")
const divResultat = document.querySelector("#divResultat")
const ulResultat = document.querySelector("#ulResultat")
const runde1tabell = document.querySelector("#runde1tabell")
const runde2tabell = document.querySelector("#runde2tabell")

let deltakere = [];

let antallMeldte = 0;
const maksAntall = 8;


class Kaster{
  constructor(navn){
    this.navn = navn;
    this.kast = []; // En array hvor alle kastene skal lagres
    this.lengste = 0; // Setter det lengste kastet til å være 0 når objektet opprettes
  }
  oppdaterKast(){
    let inputs = document.querySelectorAll(".inp"+this.navn); //Får tak i alle input-felt som hører til denne kasteren

    for(let input of inputs){ // Legger til verdien av hvert inputfelt i arrayen this.kast
      this.kast.push(input.value);
    }
    // sorterer arrayen this.kast fra høy til lav og setter verdien av this.lengste til å være det første elementet i arrayen
    this.lengste = this.kast.sort(sortereTallHoyLav)[0]; // Funksonen sortereTallHoyLav er definert helt nederst i denne filen
  }
  genererHTMLRunde1(){
    runde1tabell.innerHTML += `
      <tr id="rad${this.navn}">
        <td>${this.navn}</td>
        <td><input class="inp${this.navn}" type="number" value="14"></td>
        <td><input class="inp${this.navn}" type="number" value="15"></td>
        <td><input class="inp${this.navn}" type="number" value="10"></td>
      </tr>
    `;
  }
  genererHTMLRunde2(){
    runde2tabell.innerHTML += `
      <tr id="rad${this.navn}">
        <td>${this.navn}</td>
        <td><input class="inp${this.navn}" type="number" value="14"></td>
        <td><input class="inp${this.navn}" type="number" value="15"></td>
        <td><input class="inp${this.navn}" type="number" value="10"></td>
      </tr>
    `;
  }
}


// Hendelsesfunksjoner
btnReg.onclick = regBruker;
btnStart1.onclick = startRunde1;
btnStart2.onclick = startRunde2;
btnResultat.onclick = visResultat;

// Funksjonsdefinisjoner
function regBruker(){
  if(inpReg.value !== ""){ // Hvis inpReg ikke er tomt gjør følgende:
    deltakere.push(new Kaster(inpReg.value)); // Oppretter et nytt Kaster objekt og pusher det i arrayen deltakere.
    antallMeldte++; // samme som antallMeldte += 1. Endrer tallet på antall påmeldte
    divAntall.innerHTML = `Antall påmeldte: ${antallMeldte}/8`; // Skriver ut antall påmeldte
    ulDeltakere.innerHTML += `<p>${inpReg.value}</p>`; // Skriver ut deltakernavnet i listen ulDeltakere
    inpReg.value = ""; // Setter input-feltet til å være tomt igjen
  }
  if(antallMeldte === 8){ // Hvis antall deltakere er 8 gjør følgende:
    // Setter inputfeltet og knappen til å være diabled (grået ut)
    inpReg.disabled = true;
    btnReg.disabled = true;
  }
}

function startRunde1(){
  divDeltakerReg.style.display = "none";
  divRunde1.style.display = "block";
  runde1tabell.innerHTML = ``; // Sletter innholdet i runde1
  for(let kaster of deltakere){
    kaster.genererHTMLRunde1();
  }
  btnStart1.disabled = true; // Gråer ut knappen
}

function startRunde2(){
  divRunde2.style.display = "block"; // Viser divRunde2-elementet på nettsiden.
  for(let kaster of deltakere){
    // Oppdaterer kast for hver deltaker
    kaster.oppdaterKast();
  }
  deltakere.sort(sortereObjekterLengste); // Sorterer deltaker-arrayen, slik at den er sortert fra lengste kast til korteste
  runde2tabell.innerHTML = ``; // Sletter innholdet i runde2 tabellen

  for(let i = 0; i<4; i++){ // For de 4 første deltakerne skal html for runde2 genereres. Her er det en bug, hvis det er færre enn fire deltakere vil det komme feilmelding, kan fikses med en if-setning.
    deltakere[i].genererHTMLRunde2(); // genererHTML for Runde 2
  }
  btnStart2.disabled = true; // Gråer ut knappen
}

function visResultat(){
  divResultat.style.display = "block"; // Viser divResultat-elementet på nettsiden.
  for(let kaster of deltakere){
    // Oppdaterer kast for hver deltaker
    kaster.oppdaterKast();
  }
  deltakere.sort(sortereObjekterLengste); // Sorterer deltaker-arrayen, slik at den er sortert fra lengste kast til korteste
  ulResultat.innerHTML = `
    <li>1. plass: <b>${deltakere[0].navn}</b>, lengde: <b>${deltakere[0].lengste}</b></li>
    <li>2. plass: <b>${deltakere[1].navn}</b>, lengde: <b>${deltakere[1].lengste}</b></li>
    <li>3. plass: <b>${deltakere[2].navn}</b>, lengde: <b>${deltakere[2].lengste}</b></li>
  `;
    btnResultat.disabled = true; // Gråer ut knappen
}


//Sorteringsfunksjoner, brukt til å sortere arrays

function sortereTallHoyLav(a,b){
  // En funksjon som skal brukes til å sortere arrays med tall fra høy til lav
  return b - a;
}

function sortereObjekterLengste(objektA,objektB){
  // En funksjon som skal brukes til å sortere arrays med tall fra høy til lav
  return objektB.lengste - objektA.lengste;
}