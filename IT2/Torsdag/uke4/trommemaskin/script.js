const tromme1 = document.getElementById("trommeBoks1");
const tromme2 = document.getElementById("trommeBoks2");
const tromme3 = document.getElementById("trommeBoks3");
const tromme4 = document.getElementById("trommeBoks4");
const tromme5 = document.getElementById("trommeBoks5");
const tromme6 = document.getElementById("trommeBoks6");
const tromme7 = document.getElementById("trommeBoks7");
const tromme8 = document.getElementById("trommeBoks8");
const tromme9 = document.getElementById("trommeBoks9");

const lyd = document.getElementById("lyd");

let trommer = ["lyder/boom.wav","lyder/clap.wav","lyder/hihat.wav","lyder/kick.wav","lyder/openhat.wav","lyder/ride.wav","lyder/snare.wav","lyder/tink.wav","lyder/tom.wav"];


window.onkeydown = function(hendelse){
    if(hendelse.key === "a"){
        lyd.src = trommer[0];
        lyd.play();
        tromme1.classList.add("spiller");
    }
    if(hendelse.key === "s"){
        lyd.src = trommer[1];
        lyd.play();
        tromme2.classList.add("spiller");
    }
    if(hendelse.key === "d"){
        lyd.src = trommer[2];
        lyd.play();
        tromme3.classList.add("spiller");
    }
    if(hendelse.key === "f"){
        lyd.src = trommer[3];
        lyd.play();
        tromme4.classList.add("spiller");
    }
    if(hendelse.key === "g"){
        lyd.src = trommer[4];
        lyd.play();
        tromme5.classList.add("spiller");
    }
    if(hendelse.key === "h"){
        lyd.src = trommer[5];
        lyd.play();
        tromme6.classList.add("spiller");
    }
    if(hendelse.key === "j"){
        lyd.src = trommer[6];
        lyd.play();
        tromme7.classList.add("spiller");
    }
    if(hendelse.key === "k"){
        lyd.src = trommer[7];
        lyd.play();
        tromme8.classList.add("spiller");
    }
    if(hendelse.key === "l"){
        lyd.src = trommer[8];
        lyd.play();
        tromme9.classList.add("spiller");
    }
}

window.onkeyup = function(hendelse){
    if(hendelse.key === "a"){
        tromme1.classList.remove("spiller");
    }
    if(hendelse.key === "s"){
        tromme2.classList.remove("spiller");
    }
    if(hendelse.key === "d"){
        tromme3.classList.remove("spiller");
    }
    if(hendelse.key === "f"){
        tromme4.classList.remove("spiller");
    }
    if(hendelse.key === "g"){
        tromme5.classList.remove("spiller");
    }
    if(hendelse.key === "h"){
        tromme6.classList.remove("spiller");
    }
    if(hendelse.key === "j"){
        tromme7.classList.remove("spiller");
    }
    if(hendelse.key === "k"){
        tromme8.classList.remove("spiller");
    }
    if(hendelse.key === "l"){
        tromme9.classList.remove("spiller");
    }
}
