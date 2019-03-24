
let sykdom = document.querySelector("#sykdom")
let bildecontainer = document.querySelector("#bildecontainer")


var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);


let db = firebase.database();
let sykdomhund = db.ref("Dyr/Hunder/" + id)
let sykdomkatt = db.ref("Dyr/Katter/" + id)

// Funksjonen som skal lage html koden vår.
function genererHTML(snapshot){
  let dyr = snapshot.val()
  // her lager vi koden til bildecontainer-tagggen i html fila. må stemme overens med referansen til html elementene øverst i koden
  bildecontainer.innerHTML = `
  <img src="${dyr.Bilde}" alt="">
  `;
  // her lages koden til sykdom-taggen. i html fila. Må stemme overens med referansen øverst i koden
  sykdom.innerHTML = `
  <p>Vi har følgende informasjon: ${dyr.Sykdom}</p>
  `;
}


// Sjekker forbokstaven til key-elementet som følger med når vi kom til denne nettsiden.
if (id.charAt(0) === "H") {
  sykdomhund.on("value", genererHTML);
}
else if (id.charAt(0) === "K") {
  sykdomkatt.on("value", genererHTML);
}
