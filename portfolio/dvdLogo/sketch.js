let x = 200;
let y = 50;
let retningX = 1;
let retningY = 1;
let fart = 10;

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // put drawing code
  clear();
  if(x>window.innerWidth-25){
    retningX = -1;
  }
  else if (x<0) {
    retningX = 1;
  }
  if(y>window.innerHeight-25){
    retningY = -1;
  }
  else if (y<0) {
    retningY = 1;
  }

  x = x + retningX*fart;
  y = y + retningY*fart;
  ellipse(x,y,50,50);
}
