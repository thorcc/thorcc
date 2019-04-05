// Referanser til HTML-elementer
const velgHotell = document.querySelector("#velgHotell");
const hotellInfo = document.querySelector("#hotellInfo");
const soyler = document.querySelector("#soyler");

// Klassedefinisjoner
class Hotell{
    constructor(navn,tlf,epost,bilde,temp){
        this.navn = navn;
        this.tlf = tlf;
        this.epost = epost;
        this.bilde = bilde;
        this.temp = temp;
    }

    maksTemp(){
        let maks = -Infinity;
        for(let tall of this.temp){
           if(tall > maks) {
               maks = tall;
           }
       }
       return maks;
    }
    minTemp(){
        let min = Infinity;
        for(let tall of this.temp){
            if(tall < min) {
                min = tall;
            }
        }
        return min;
    }
    gjTemp(){
        let total = 0;
        for(let tall of this.temp){
            total += tall;
        }
        return total / this.temp.length;
    }

    lagSoyler(){
        soyler.innerHTML = ``;
        for(let tall of this.temp){
            let nyDiv = document.createElement("div");
            nyDiv.style.height = tall*2 + 40 + "px";
            nyDiv.style.backgroundColor = "blue";
            soyler.appendChild(nyDiv);
        }
    }

    info(){
        let html = `
            <h2>${this.navn}</h2>
            <img src=${this.bilde}>
            <p>Tlf: ${this.tlf}</p>
            <p>Epost: ${this.epost}</p>
            <h3>Temperatur</h3>
            <p>Siste syv dager: ${this.temp.join(", ")}</p>
            <p>Maks: ${this.maksTemp()}</p>
            <p>Min: ${this.minTemp()}</p>
            <p>Snitt: ${this.gjTemp().toFixed(1)}</p>
        `;
        hotellInfo.innerHTML = html;
    }
}

let spidsbergseter = new Hotell("Spidsbergseter",61284000,"post@sgh.no","FilerH2010Hoteller/spidsbergseter.jpg",[-5,-3,-2,0,2,3]);
let rondablikk = new Hotell("Rondablikk",61294940,"post@rondablikk.no","FilerH2010Hoteller/rondablikk.jpg",[-8,-5,-5,-3,-3,-3]);

let hoteller = [spidsbergseter,rondablikk];


velgHotell.onchange = function(){
    for(let hotell of hoteller){
        if(velgHotell.value === hotell.navn){
            hotell.info();
            hotell.lagSoyler();
        }
    }
}
