// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Klassedefinisjoner
class Figur{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  beveg(){
    this.x = this.x + Math.random()*10 - 5;
    this.y = this.y + Math.random()*10 - 5;
  }
}
class Bubble extends Figur{
  super(x,y){
    this.x = x;
    this.y = y;
  }
  tegn(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x,this.y, 50, 0, 2 * Math.PI);
    ctx.stroke()
  }
}
class Square extends Figur{
  super(x,y){
    this.x = x;
    this.y = y;
  }
  tegn(){
    ctx.fillStyle = "white";
    ctx.fillRect(this.x,this.y,50,50)
  }
}

//Funksjonsdefinisjoner
function tegnBakgrunn(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}

function gameloop(){
  tegnBakgrunn();
  boble1.beveg();
  boble2.beveg();
  boble3.beveg();
  boble4.beveg();
  firkant1.beveg();
  firkant2.beveg();
  firkant3.beveg();
  firkant1.tegn();
  firkant2.tegn();
  firkant3.tegn();
  boble1.tegn();
  boble2.tegn();
  boble3.tegn();
  boble4.tegn();
  requestAnimationFrame(gameloop);
}

// Globale variabler
let boble1 = new Bubble(100,100);
let boble2 = new Bubble(200,200);
let boble3 = new Bubble(300,300);
let boble4 = new Bubble(400,400);
let firkant1 = new Square(400,400);
let firkant2 = new Square(400,400);
let firkant3 = new Square(400,400);


// Oppstart
gameloop();


