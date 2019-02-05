console.log("Skriptet er lastet");

//Oppretter variabler som referer til databsen
const db = firebase.database();
const bloggere = db.ref("bloggere");

// Pushet en string til databasen, firebase lager primærnøkkel
bloggere.push("Sophie Elise");

// Pushet et objekt til databasen, firebase lager primærnøkkel
bloggere.push({
  "navn":"Frøken Komiker",
  "folgere":59000
});

// Lagde et objekt med egen primærnøkkel
const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set({
  "navn":"Peppa Gris",
  "folgere": 2000000
});

// Oppdaterer objektet pappahjerte med nytt navn
pappahjerte.update({
  "navn":"Hans Olav Lahlum"
});
