  // Referanser til HTML-elementer
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");


  // Globale variabler
  let bubble = {
    x: 200,
    y: 200
  }

  // Oppstart
  gameloop();

  //Funksjonsdefinisjoner
  function gameloop(){
    tegnBakgrunn();
    tegnBubble();
    bevegBubble();
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