// Referanser til html-elementer
const main = document.querySelector("main");
const select = document.querySelector("select");
const button = document.querySelector("button");
const resultat = document.querySelector(".resultat");

// Globale variabler
let poeng = 0;

// Hendelsesfunksjoner
select.onchange = velgSprak;

button.onclick = sjekkSvar;

// Funksjonsdefinisjoner
function velgSprak(){
  if(select.value == ""){
    main.innerHTML = "Velg et språk!"
  }
  else{
    for(let sporsmal of engelsk){
      sporsmal.skrivSporsmal();
    }
    button.disabled = false;
  }
}

function sjekkSvar(){
  for(let sporsmal of engelsk){
    sporsmal.sjekk();
  }
  resultat.innerHTML = poeng;
}

// Klassedefinisjoner
class Sporsmal{
  constructor(id,tekst,alt,korrekte){
    this.tekst = tekst;
    this.alt = alt;
    this.korrekte = korrekte;
    this.id = id;
    this.html;
  }
  skrivSporsmal(){
    this.html = `
        <h2>${this.tekst}</h2>
      `;
    for(let alternativ of this.alt){
      this.html += `
      <p>
      <input class="${this.id}" type="radio" name="${this.id}">
      <label>${alternativ}</label>
      </p>
      `
    };
    this.html += `</p>`;
    main.innerHTML += this.html;
  }
  sjekk(){
    const klasse = "." + this.id;
    const btns = document.querySelectorAll(klasse);
    for(korrekt of this.korrekte){
      if(btns[korrekt].checked){
        poeng +=1;
      }
    }
  }
}

let engelsk = [
  new Sporsmal(1,"Hva betyr ordet Where?",["Hvor","Vi er","Var","Hvorfor"],[0]),
  new Sporsmal(2,"Hvilke(t) ord kan legges til her? How are…",["you","John doing?","things","the house","the wifte"],[0,2]),
  new Sporsmal(3,"Hva er riktig oversettelse?",["Hei, mitt navn er Tom","Jeg er Tom","Kjenner du Tom? ","Når kommer Tom?"],[2])
];