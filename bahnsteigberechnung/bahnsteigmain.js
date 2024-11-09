
const übernommeneDaten = JSON.parse(localStorage.getItem("übergebeneDaten"));

console.log(übernommeneDaten);

if (übernommeneDaten){
    console.log("Daten erfolgreich geladen")
}
else{
    console.log("ERROR/ Daten nicht gefunden")
}
let abstand = übernommeneDaten.abstand;
let hoehe = übernommeneDaten.hoehe;
let ordnungsnummer = übernommeneDaten.ordnungsnummer;

console.log(`Abstand: ${abstand} Höhe: ${hoehe} ordnungsnummer: ${ordnungsnummer}`)