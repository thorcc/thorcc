//HTML-elementer
const secMeldinger = document.querySelector("#secMeldinger");
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inpMelding");

//Firebease
const db = firebase.database();
const meldinger = db.ref("mineMessengerMeldinger");


let user;

function lagreMelding(event){
  event.preventDefault();
  meldinger.push({
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
    tekst: inpMelding.value
  });
  skjema.reset();
}

function visMelding(snap){
  const melding = snap.val();
  let klasse = "others";
  if(user.uid === melding.uid){
    klasse = "me";
  }
  let bilde = "anonym.png";
  if(melding.photoURL){
    bilde = melding.photoURL;
  }
  secMeldinger.innerHTML += `
    <div class=${klasse}>
      <img src=${bilde} title=${melding.displayName}>
      <span>${melding.tekst}</span>
    </div>
  `;
}

firebase.auth().onAuthStateChanged(newuser =>{
    if(newuser){
      user = newuser;
      skjema.addEventListener("submit",lagreMelding);
      meldinger.on("child_added",visMelding);
    }
    else {
      document.body.innerHTML = `
        <main class="notloggedin"
          <h1>Du er ikke logget inn</h1>
          <a href="login.html">Logg inn her</a>
        </main>
      `;
    }
});
