console.log("Skriptet er lastet");

// Referanser til HTML-elementer
const velgHotell = document.querySelector(".velgHotell");
const valgtHotell = document.querySelector("#valgtHotell");

// Klassedefinisjoner
class Hotell{
  constructor(navn,tlf,epost,bilde){
    this.navn = navn;
    this.tlf = tlf;
    this.epost = epost;
    this.bilde = bilde;
  }
  vis(){
    let html = `
      <div>
        <h2>${this.navn}</h2>
        <img src=${this.bilde}>
        <p>tlf: ${this.tlf}</p>
        <p>epost: ${this.epost}</p>
      </div>
    `;
    valgtHotell.innerHTML = html;
  }
}

// Globale variabler
let spidsbergseter = new Hotell("Spidsbergseter","61 28 40 00","post@sgh.no","Filer2010Hoteller/spidsbergseter.jpg");
let rondablikk = new Hotell("Rondablikk","61 29 18 18","post@rondablikk.no","Filer2010Hoteller/rondablikk.jpg");

let hoteller = [spidsbergseter,rondablikk];


velgHotell.onchange = visHotell;

function visHotell(){
  for(let hotell of hoteller){
    if(velgHotell.value === hotell.navn){
      hotell.vis();
    }
  }
}
