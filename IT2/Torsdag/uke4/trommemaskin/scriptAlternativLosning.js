const trommeElementer = document.querySelectorAll(".trommeBoks");
const lyd = document.querySelector("#lyd");

let trommer = ["lyder/boom.wav","lyder/clap.wav","lyder/hihat.wav","lyder/kick.wav","lyder/openhat.wav","lyder/ride.wav","lyder/snare.wav","lyder/tink.wav","lyder/tom.wav"];
let knapper = ["a","s","d","f","g","h","j","k","l"];

window.onkeydown = function(hendelse){
    for(let i = 0; i < knapper.length;i++){
        if(hendelse.key === knapper[i]){
            lyd.src = trommer[i];
            lyd.play();
            trommeElementer[i].classList.add("spiller");
        }
    }
}
window.onkeyup = function(){
    for(element of trommeElementer){
        element.classList.remove("spiller");
    }
}

