

function openBahnsteig(abstand, hoehe, ordnungsnummer) {
    this.abstand = abstand;
    this.hoehe = hoehe;
    this.ordnungsnummer = ordnungsnummer;
    saveInLocalStorage(abstand,hoehe,ordnungsnummer);
    window.location.href = "/bahnsteigberechnung/bahnsteig.html"

}

function saveInLocalStorage(abstand, hoehe, ordnungsnummer){
    localStorage.clear();
    localStorage.setItem("übergebeneDaten", JSON.stringify({abstand, hoehe,ordnungsnummer}));
    if (localStorage.getItem("übergebeneDaten")){
        console.log("Daten gespeichert");

    }
    else{
        console.log("ERROR DATEN NICHT GESPEICHERT")
    }
}