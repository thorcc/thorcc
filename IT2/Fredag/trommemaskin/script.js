console.log("Skriptet er lastet");

window.onkeydown = function(event){
    const boks = document.querySelector(`div[data-code=${event.code}]`);
    const lyd = document.querySelector(`audio[data-code=${event.code}]`);

    if(!lyd){
        return;
    }

    lyd.currentTime = 0;
    lyd.play();

    boks.classList.add("spiller");

}
window.onkeyup = function(event){
    const boks = document.querySelector(`div[data-code=${event.code}]`);
    boks.classList.remove("spiller");
}