console.log("Skriptet er lastet");

// Referanser til HTML-elementer
const velgHotell = document.querySelector(".velgHotell");
const valgtHotell = document.querySelector("#valgtHotell");


// Klassedefinisjoner
class Hotell{
  constructor(navn,tlf,epost,bilde,temp){
    this.navn = navn;
    this.tlf = tlf;
    this.epost = epost;
    this.bilde = bilde;
    this.temp = temp;
  }

  gjSnitt(){
    let total = 0;
    for(let tall of this.temp){
      total += tall;
    }
    return total/this.temp.length;
  }

  maks(){
    let maks = -Infinity;
    for(let tall of this.temp){
      if(tall > maks){
        maks = tall;
      }
    }
    return maks;
  }

  min(){
    let min = Infinity;
    for(let tall of this.temp){
      if(tall < min){
        min = tall;
      }
    }
    return min;
  }

  vis(){
    let html = `
      <div>
        <h2>${this.navn}</h2>
        <img src=${this.bilde}>
        <p>tlf: ${this.tlf}</p>
        <p>epost: ${this.epost}</p>
        <p>Temp. siste 7: ${this.temp.join(", ")}</p>
        <p>Gj. snitt: ${this.gjSnitt().toFixed(1)}</p>
        <p>Min: ${this.min()}</p>
        <p>Maks: ${this.maks()}</p>
      </div>
    `;
    valgtHotell.innerHTML = html;
  }
}

// Globale variabler
let spidsbergseter = new Hotell("Spidsbergseter","61 28 40 00","post@sgh.no","Filer2010Hoteller/spidsbergseter.jpg",[-5,-3,-2,0,2,3]);
let rondablikk = new Hotell("Rondablikk","61 29 18 18","post@rondablikk.no","Filer2010Hoteller/rondablikk.jpg",[-8,-5,-5,-3,-3,-3]);

let hoteller = [spidsbergseter,rondablikk];


velgHotell.onchange = visHotell;

function visHotell(){
  for(let hotell of hoteller){
    if(velgHotell.value === hotell.navn){
      hotell.vis();
    }
  }
}
