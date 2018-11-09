console.log("Skriptet er lastet"); // Skriver til konsollen for å sjekke om linken mellom html-filen og js-filen fungerer

window.onkeydown = function(event){ // Når brukeren trykker på en tastaturknapp inne i nettleservinduet kjøres en funksjon som sender inn hendelsen som parameter
    const boks = document.querySelector(`div[data-code=${event.code}]`); // Bruker querySelector for å hente ut div-element med attributten data-code=Knapp som er trykket på tastaturet
    const lyd = document.querySelector(`audio[data-code=${event.code}]`);// Bruker querySelector for å hente ut audio-element med attributten data-code=Knapp som er trykket på tastaturet

    if(!boks){ // Hvis variabelen boks er null(false), altså hvis brukeren trykker på en knapp som ikke er koblet til en boks eller lyd:
        return; // hopp ut av funksjonen
    }

    lyd.currentTime = 0; // Start lydavspillingen på nytt
    lyd.play(); // Spill lyden

    boks.classList.add("spiller"); // Legger til klassen spiller på boksen som hører til tastaturknappen som er trykket på, slik at den skifter farge

}
window.onkeyup = function(event){ // Funksjon som starter når brukeren slipper en knapp på tastaturet, tastetrykket sendes inn som event
    const boks = document.querySelector(`div[data-code=${event.code}]`); // Bruker querySelector for å hente ut div-elementer med attributten data-code=Knapp som er trykket på tastaturet

    if(!boks){ // Hvis variabelen boks er null(false), altså hvis brukeren trykker på en knapp som ikke er koblet til en boks eller lyd:
        return; // hopp ut av funksjonen
    }

    boks.classList.remove("spiller"); // Fjern klassen spiller fra boksen når brukeren har sluppet tasten på tastaturet
}