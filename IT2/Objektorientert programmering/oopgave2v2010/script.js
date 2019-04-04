// Referanser til HTML-elementer
const hotellInfo = document.querySelector(".hotellInfo");
const velgHotell = document.querySelector("#velgHotell");

// Klassedefinisjoenr
class Hotell{
  constructor(navn,tlf,epost,bilde,temp){
    this.navn = navn;
    this.tlf = tlf;
    this.epost = epost;
    this.bilde = bilde;
    this.temp = temp;
  }

  get gjTemp(){
    let tot = 0;
    for(let tall of this.temp){
      tot += tall;
    }
    return tot/this.temp.length;
  }

  get maxTemp(){
    let maks = -Infinity;
    for(let tall of this.temp){
      if(tall > maks){
        maks = tall;
      }
    }
    return maks;
  }

  get minTemp(){
    let min = Infinity;
    for(let tall of this.temp){
      if(tall < min){
        min = tall;
      }
    }
    return min;
  }
  get tempSoyler(){
    let html = ``;
    for(let tall of this.temp){
      let farge;
      if(tall < 1){
        farge = "blue";
      }
      else{
        farge = "red";
      }
        html += `<div style="height:${tall*10+200}px; background-color:${farge};" class="soyle"><p>${tall}</p></div>`;
    }
    return html;
  }

  get info(){
    let html = `
    <div>
      <h2>${this.navn}</h2>
      <img src="${this.bilde}">
      <p>Telefon: ${this.tlf}</p>
      <p>E-post: ${this.epost}</p>
    </div>
    <h3>Temperatur siste 7 dager</h3>
    <p>Gjennomsnitt: ${this.gjTemp}</p>
    <p>Maks: ${this.maxTemp}</p>
    <p>Min: ${this.minTemp}</p>
    <div class="tempSoyler">
      ${this.tempSoyler}
    </div>
    
    `;
    return html;
  }
}



//Funksjonsdefinisjoner
function skrivHotellInfo(){
  for(let hotell of hoteller){
    if(hotell.navn === velgHotell.value){
      hotellInfo.innerHTML = hotell.info;
    }
  }
}


// Instansierer hvert hotell som et eget objekt
let spidsbergseter = new Hotell("Spidsbergseter",61284000,"post@sgh.no","bildeURL.jpg",[-5,-3,-2,0,2,3]);
let rondablikk = new Hotell("Rondablikk",61294940,"post@rondablikk.no","bildeURL.jpg",[-8,-5,-5,-3,-3,-3]);
let rondaneSPA = new Hotell("Rondane SPA",61209090,"post@rondane.no","bildeURL.jpg",[-10,-8,-8,-5,-5,-4]);
let brekkeseter = new Hotell("Brekkeseter",61233711,"post@brekkeseter.no","bildeURL.jpg",[-9,-7,-5,-5,-2,0]);
let hjerkinn = new Hotell("Hjerkinn",61215100,"fjellstua@hjerkinn.no","bildeURL.jpg",[-12,-10,-9,-9,-7,-7]);

// Legger hotellene i en egen array
let hoteller = [spidsbergseter,rondablikk,rondaneSPA,brekkeseter,hjerkinn];

// Hendelsesfunksjoner
velgHotell.onchange = skrivHotellInfo;

