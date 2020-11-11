// chiedere all'utente il numero di chilometri che vuole percorrere
var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
document.getElementById('kilometres').innerHTML = chilometri + "km";

// chiedi l'età del passeggero
var anni = parseInt(prompt("Quanti anni hai?"));
document.getElementById('age').innerHTML = anni + " anni";

// prezzo biglieto base per chilometro
var prezzoPerChilometro = 0.21;
document.getElementById('basic-price-ticket').innerHTML = prezzoPerChilometro + "€";

// calcolare il prezzo del biglietto
var prezzoStandard = chilometri * prezzoPerChilometro;

// applicare lo sconto del 20%
var prezzoSconto20 = prezzoStandard * 20 / 100;

// applicare lo sconto del 40%
var prezzoSconto40 = prezzoStandard * 40 / 100;

if (!isNaN(chilometri) && !isNaN(anni)) {

  // prezzo biglietto per persone maggiorenni ma che non superano i 65 anni
  if (anni >= 18 && anni <= 65) {
    document.getElementById('final-price').innerHTML = prezzoStandard + "€";
  } else if (anni < 18 && anni >= 8) {
    // prezzo biglietto per persone minorenni
    document.getElementById('final-price').innerHTML = prezzoSconto20 + "€";
    document.getElementById('banner').innerHTML = "!!!WOW che culo, sei minorenne e hai diritto ad uno sconto del 20%!!!";
  } else if (anni > 65) {
    // prezzo biglietto per persone over 65
    document.getElementById('final-price').innerHTML = prezzoSconto40 + "€";
    document.getElementById('banner').innerHTML = "!!!WOW che culo (o forse no), hai più di 65 anni e ha diritto ad uno sconto del 40%!!!";
  } else if (anni < 8 && anni >= 1) {
    alert("SEI TROPPO PICCOLO, RESTA A CASA!")
  } else {
    alert("MI STAI PRENDENDO PER IL CULO???!!!!")
  }

} else {
  alert("errore! i campi richiedono solo dei numeri compresi tra 1 e 1000");
}
