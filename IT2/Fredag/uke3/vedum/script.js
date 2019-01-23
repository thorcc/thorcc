const sp = document.getElementById('sp');
const knapp = document.getElementById('knapp');
const knappStopp = document.getElementById('knappStopp');
const knappStart = document.getElementById('knappStart');

let x = 0;
let y = 0;

knappStart.onclick = startAnimasjon;
knappStopp.onclick = stoppAnimasjon;

function startAnimasjon(bilde){
  x += 1;
  bilde.style.left = x + "%";
  frames = requestAnimationFrame(startAnimasjon);
}
function stoppAnimasjon(){
  cancelAnimationFrame(frames);
}

function slagsvold(){
  let bilde = document.createElement("img");
  bilde.src = "sp01-kopi.jpg";

  document.body.appendChild(bilde);
  bilde.style.position = "absolute";
  bilde.style.left = Math.floor(Math.random()*100)+1 + "%";
  bilde.style.top = Math.floor(Math.random()*100)+1 + "%";
  startAnimasjon(bilde);
}

setInterval(slagsvold,1000);

function startAnimasjon(bilde){
    x += Math.floor(Math.random()*3)-1;
    y += Math.floor(Math.random()*3)-1;
    bilde.style.left = x + "%";
    bilde.style.top = y + "%";
    frames = requestAnimationFrame(startAnimasjon);
}
function stoppAnimasjon(){
    cancelAnimationFrame(frames);
}



array.push({navn: inpNavn.value, antFilmer: inpAnt.value});