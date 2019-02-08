# Animasjoner

### Innhold

- [CSS-transitions](#CSS-transitions)  
- [CSS-animations](#CSS-Animations)  
- [.animate](#.animate)  
- [setInterval](#setinterval())

# CSS-transitions
For at HTML-elementer skal ha en jevn overgang når CSS-stilen deres endres kan vi bruke CSS-transitions.
Overgangene lages ved å legge til egenskapen *transition* til elementet som skal endres.

### Ressurser: 
Kode 2: kap 9.1-9.3  
[w3school: CSS-transitions](https://www.w3schools.com/css/css3_transitions.asp)  
[Youtube: CSS-overganger](https://www.youtube.com/watch?v=jwejfF0Pg0w&index=1&list=PLJC9cL8YfNXpSJc3NPJ1hsTe_deDdHKa4)

### Eksempel
~~~~
<head>
    <style> 
        #firkant {
            width: 100px;
            height: 100px;
            background: red;
            transition: width 2s, height 4s;
        }

        div:hover {
            width: 300px;
            height: 300px;
        }
    </style>
</head>
<body>

    <div id="firkant"></div>
</body>
~~~~

# CSS-Animations (@keyframes)
CSS-Animations kan brukes til å lage animasjoner som skal startes av seg selv.
De lages ved å definere nøkkel*frames* for animasjonen i CSS.


### Ressurser: 
Kode 2: kap. 9.4  
[w3school: CSS-animations](https://www.w3schools.com/css/css3_animations.asp)  
[Youtube: CSS-keyframes](https://www.youtube.com/watch?v=aqFhMwoIOj8&index=2&list=PLJC9cL8YfNXpSJc3NPJ1hsTe_deDdHKa4)

### Eksempel:
~~~~
<head>
    <style>
        #firkant {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            animation: eksempelAnimasjon 4s;
        }

        @keyframes eksempelAnimasjon {
            0%   {background-color:red; left:0px; top:0px;}
            25%  {background-color:yellow; left:200px; top:0px;}
            50%  {background-color:blue; left:200px; top:200px;}
            75%  {background-color:green; left:0px; top:200px;}
            100% {background-color:red; left:0px; top:0px;}
        }
    </style>
</head>
<body>

    <div id="firkant"></div>

</body>
~~~~

# .animate (Web Animations API (WAAPI))

WAAPI er en ny standard for programmering av animasjoner i nettleseren.
Den er veldig fleksibel og kobler CSS-animasjoner sammen med javascript.

### Ressurser:  
Kode 2: kap. 9.5-9.6
[MDN - WAAPI](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)

### Skrivemåte:
~~~~
<script>
    element.animate([Array med CSS-stiler],tid);
</script>
~~~~
Eksempel:
~~~~
<body>
    <div id="divTekst">Velkommen</div>
            
    <script>
        let divTekst = document.querySelector("#divTekst");
        divTekst.animate([{opacity:0},{opacity:1}],2000); //Animasjon fra usynlig til synlig på 2s (2000 millisekunder)
    </script>
</body>
~~~~

### Med kontrollobjekt:
For å kontrollere animasjonen enda mer detaljert kan vi bytte ut tiden med et eget *kontrollobjekt*.
~~~~
<script>
    element.animate([Array med CSS-stiler],{objekt med kontroller av animasjonen});
</script>
~~~~

.animate-innstillinger:

| Innstilling |Forklaring   |
|----------|-------------|
|duration  |Varighet i millisekunder.| 
|delay     |Forsinkelse i millisekunder.| 
|iterations|Antall ganger animasjonen skal utføres. Ett tall eller *Infinity*.|
|easing    |Hvordan animasjonen skal utføres. Eks: ease-in-out, steps(6)|
|direction |Retning på animasjonen. *alternate* er frem og tilbake, *reverse* snur og *normal* er default.|
|fill      |Hva som skjer med elementet når animasjonen er ferdig. *forwards* fryser elementet og *backwards* setter elementet tilbake til start.| 

For å gjøre koden mer lesbar kan CSS-egenskapene til animasjonen og instillingene lagres som egne variabler.
Se eksempel under:
~~~~
 <body>
        <img id="bill" src="Bill_Clinton.jpg" alt="Bilde av Bill Clinton">
        
        <script>
            const bill = document.querySelector("#bill");

            let animasjonCSS = [ //Array med CSS-egenskapene til animasjonen
                {transform:"rotate(0deg)",left:"0px"},
                {transform: "rotate(360deg)",left:"95%"}
            ];
            let animasjonInnstillinger = { // Objekt med instillingene til Animasjonen
                duration:3000, // Varigheten til animasjonen i millisekunder
                direction:"alternate", // Retningen til animasjonen, alternate betyr frem og tilbake
                iterations:Infinity // Antall ganger animasjonen skal kjøre, Infinity betyr uendelig
            };
            
            bill.animate(animasjonCSS,animasjonInnstillinger); // Starter animasjonen med og sender inn CSS-array og objektet
        </script>
    </body>
~~~~


### Styre en animasjon
En .animate-animasjon kan styres etter den har startet.
Da må animasjonen lagres som en variabel, se eksempel under:

~~~~
let minAnimasjon = bill.animate(animasjonCSS,animasjonsInnstillinger);

bill.pause(); // Pauser animasjonen
bill.reverse(); // Snur retningen på animasjonen
bill.play(); //Starter avspillingen av animasjonen
bill.finish(); // Hopper til slutten av animasjonen
~~~~
 
##### Hente ut og endre informasjon om en animasjon

~~~~
bill.currentTime; // Antall tid(ms) som er gått siden animasjonen startet
bill.currentTime = 300; // Hopp til 300ms

bill.playbackRate; // Hvilken hastighet spilles animasjonen av i. 1 er vanlig hastighet, 2 er dobbel, osv.
bill.playState; // Hvilken tilstand animasjonen er i. Play, paused, finished, osv.
~~~~


# setInterval()

For å få en hvilken som helst javascript-funksjon til å kjøre ved et gitt intervall kan setInterval() brukes.


~~~~
<script>
    function alertHei() {// En funksjon som lager en alertboks med Hei! i nettleseren
        alert("Hei!");
    }

    setInterval(alertHei,1000); // Funksjonen alertHei kalles opp hvert sekund (1000ms)
</script>
~~~~~

#### Stoppe et intervall
For å stopp en setInterval() må intervallet lagres i en egen variabel, også må clearInterval() kjøres med intervallet som input.
Se eksempel under.

~~~~
<script>

    let teller = 0; //Global variabel som holder tellingen på hvor mange ganger funksjonen har kjørt
    
    function alertHei() {
        alert("Hei!");
        teller++; // plusser en på teller hver gang funksjonen kjøres
        
        if(teller>10){ // Hvis teller er mer enn tid
            clearInterval(mittInterval); // Fjern mittInterval
        }
    }
    
    let mittInterval = setInterval(alertHei,1000); // Lagrer intervallet som en egen variabel
</script>
~~~~ 