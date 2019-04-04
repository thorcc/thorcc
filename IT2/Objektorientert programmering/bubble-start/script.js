// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Klassedefinisjoner
class Figur{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    beveg(){
        this.x = this.x + Math.random()*10 - 5;
        this.y = this.y + Math.random()*10 - 5;
    }
    tegn(){
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.stroke();
    }
}

class Bubble extends Figur{
    constructor(x,y,r){
        super(x,y,r);
    }
}

class Firkant extends Figur{
    constructor(x,y,h,b){
        super(x,y);
        this.h = h;
        this.b = b;
    }
    tegn(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x,this.y,this.r,this.r);
    }
}


// Globale variabler
let boble1 = new Bubble(100,200,50);
let boble2 = new Bubble(100,200,50);
let firkant = new Firkant(50,60,40,100);

// Oppstart
gameloop();

//Funksjonsdefinisjoner
function gameloop(){
    tegnBakgrunn();
    boble1.beveg();
    boble1.tegn();
    boble2.beveg();
    boble2.tegn();
    firkant.beveg();
    firkant.tegn();
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