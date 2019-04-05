// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  tegn(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x,this.y,50,0,Math.PI*2);
    ctx.stroke();
  }
  beveg(){
    this.x = this.x + Math.random()*10 - 5;
    this.y = this.y + Math.random()*10 - 5;
  }
  sjekk(){
    if(this.x-this.r > canvas.width){
      this.x = this.x - 5;
    }
    if(this.x+this.r < 0){
      this.x = this.x + 5;
    }
    if(this.y-this.r > canvas.height){
      this.y = this.y - 5;
    }
    if(this.y+this.r < 0){
      this.y = this.y + 5;
    }
  }
}


// Globale variabler
let boble1 = new Bubble(200,100,50);
let boble2 = new Bubble(200,100,50);

let bobler = [];

for(let i = 0; i<1000;i++){
  bobler.push(new Bubble(100,100,40));
}

// Oppstart
gameloop();

//Funksjonsdefinisjoner
function gameloop(){
  tegnBakgrunn();

  for(let boble of bobler){
    boble.beveg();
    boble.sjekk();
    boble.tegn();
  }
  requestAnimationFrame(gameloop);
}

function tegnBakgrunn(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}

function tegnBubble(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(bubble.x, bubble.y, 50, 0, 2 * Math.PI);
  ctx.stroke()
}

function bevegBubble(){
  bubble.x = bubble.x + Math.random()*10 - 5;
  bubble.y = bubble.y + Math.random()*10 - 5;
}