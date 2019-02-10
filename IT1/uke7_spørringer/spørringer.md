# Spørringer i firebase

Spørringer brukes til å hente ut data fra databaser.
I firebase gjøres spørringer ved innebygde spørrefunksjoner.
Skrivemåte:
~~~~
databaseRef.spørrefunksjon();
~~~~

## Spørrefunksjonen .on();

I IT1 bruker vi spørrefunksjonen ``.on();``.
Skrivemåte:
~~~~
databaseRef.on("hendelseslytter",javascriptFunksjon);
~~~~

.on-funksjonen tar inn to argumenter, det første er en *hendelseslytter* og det andre er en javascript-funksjon.
Funksjonen "lytter" etter en spesiell hendelse i databasen, når den hendelsen skjer utføres javascript-funksjonen.
For eksmpel vil hendelseslytteren ``"child_added"`` "lytte" etter nye oppføringen i databasen, og når en ny oppføring blir lagt til kjøres en javascript-funksjon.
Javascripten-funksjonen kan for eksempel være en funksjon som skriver ut den nye oppføringen på nettsiden.
Tabellen under viser en oversikt over de tre mest brukte lytterne i IT1.

|Hendelseslyttere|Lytter etter|
|--------------------|--------|
|``onChildAdded``    |nye oppføringer som legges til|
|``onChildRemoved``|oppføringer som fjernes|
|``onChildChanged``|data som endres|

Eksempler på spørringer:
~~~~
/* 
Spørring som lytter til nye oppføringer i databasen, hvis det skjer kjøres funksjonen visVare.
Når nettsiden lastes inn går den gjennom hver oppføring i databasen og kjører funksjonen visVare
på hver oppføring.
*/
sko.on("child_added",visVare); 
            
jakker.on("child_added",visVare); // Samme som spørrefunksjonen over, bare med jakker.
~~~~

## Sorteringsfunksjoner

Når en arbeider med databaser som inneholder veldig mye data blir det fort ganske voldsomt å hente ut all dataen som er oppført i databasen.
Derfor gjøres ofte spørringer til databasen som ber om bare deler av dataen.
For eksempel på nettsider vil en gjerne bare hente ut data som skal vises på nettsiden.

For å hente ut deler av dataen i en firebase-database brukes sorteringsfunksjoner kombinert med en spørrefunksjon.
Skrivemåte:
~~~~~
databaseRef.sorteringsfunksjon().spørrefunksjon();
~~~~~
Det er også mulig å kombinere flere sorteringsfunksjoner med en spørrefunksjon, da skriver vi gjerne funksjonene under hverandre slik:
~~~~~
databaseRef
    .sorteringsfunksjon1()
    .sorteringsfunksjon2()
    .sorteringsfunksjon3()
    .spørrefunksjon();
~~~~~~

Tabellen under viser en oversikt over sorteringsfunksjoner i firebase.
Det finner mange flere innebygde sorteringsfunksjoner i firebase, en oversikt over alle finnes i [dokumentasjonen](https://firebase.google.com/docs/reference/android/com/google/firebase/database/Query) til firebase.

|Sorteringsfunksjoner|Funksjon|
|--------------------|--------|
|``.limitToFirst(n)``    |Hent ut de *n* første|
|``.limitToLast(n)``     |Hent ut de *n* siste|
|``.startAt(verdi)``|Hent ut alle som starter på en bestemt verdi|
|``.endAt(verdi)``|Hent ut alle som slutter på en bestemt verdi|
|``.equalTo(verdi)``|Hent ut alle som er lik en verdi|

Eksempler på spørringer med sorteringsfunksjoner:
~~~~~
// Spørring som sorterer sko etter pris, laveste først
sko
    .orderByChild("pris")
    .on("child_added",visVare);

// Spørring som sorterer sko etter pris laveste først, og gir de tre billigste skoene 
sko
    .orderByChild("pris")
    .limitToFirst(3)
    .on("child_added",visVare);

// Spørring som gir alle sko med pris mellom 1800 og 2200, sortert etter pris.
sko
    .orderByChild("pris")
    .startAt(1800)
    .endAt(2200)
    .on("child_added",visVare);
~~~~~

## Eksempel - Nettbutikk

Database (JSON):
~~~~
{
    "varer":{
        "sko":{
            "sko001":{
                "merke":"Nike",
                "modell":"Air Max 97",
                "pris":1849
            },
            "sko002":{
                "merke":"Nike",
                "modell":"Air VaporMax",
                "pris":2049
            },
            "sko003":{
                "merke":"Adidas",
                "modell":"Yeezy Boost 700 v2",
                "pris":2950
            }
        },
        "jakker":{
            "jakke001":{
                "merke":"Supreme x The North Face",
                "modell":"Expedition Jacket",
                "pris":2800
            }
        }
    }
}
~~~~

Spørringer til databasen (HTML og javascript)
~~~~



<!DOCTYPE html>
<html lang="nb">
    <head>
        <meta charset="UTF-8">
        <title>Nettbutikk</title>
        <!--Lim inn kode fra firebase her-->
    </head>
    <body>
        
        <main>
            
        </main>

        <script>
            const main = document.querySelector("main"); // Variabel som referer til mian-elementet

            // Referanser til databasen
            const db = firebase.database();
            const sko = db.ref("varer/sko"); // Referer til alt som ligger under sko i databasen
            const jakker = db.ref("varer/jakker"); // Referer til alt som ligger under jakker i databasen

            function visVare(snapshot){
                //Javascript-funksjon som skriver varene ut på nettsiden i main-elementet
                let vare = snapshot.val();
                main.innerHTML +=`
                    <article class="vare">
                        <h1>${vare.merke} - ${vare.modell}</h1>
                        <p>Pris: ${vare.pris}</p>
                    </article>
                `
            }

            sko.on("child_added",visVare); // Spørring som lytter til nye oppføringer i databasen, hvis det skjer kjøres funksjonen visVare.
                                        // Når nettsiden lastes inn går den gjennom hver oppføring i databasen og kjører funksjonen visVare
                                        // på hver oppføring.
            
            jakker.on("child_added",visVare); // Samme som spørrefunksjonen over, bare med jakker.


            // Spørring som sorterer sko etter pris, laveste først
            sko
                .orderByChild("pris")
                .on("child_added",visVare);

            // Spørring som sorterer sko etter pris laveste først, og gir de tre billigste skoene 
            sko
                .orderByChild("pris")
                .limitToFirst(3)
                .on("child_added",visVare);

            // Spørring som gir alle sko med pris mellom 1800 og 2200, sortert etter pris.
            sko
                .orderByChild("pris")
                .startAt(1800)
                .endAt(2200)
                .on("child_added",visVare);
        </script>
    </body>
</html>
~~~~


## Les mer
Kode 1 - kapittel 8  
[Firebase-dokumentasjon](https://firebase.google.com/docs/reference/android/com/google/firebase/database/package-summary)  
[Firebase Database Querying 101 (YT)](https://www.youtube.com/watch?v=3WTQZV5-roY&list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&index=3)  