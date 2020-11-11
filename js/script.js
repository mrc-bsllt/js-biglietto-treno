// chiedere all'utente il numero di chilometri che vuole percorrere
var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// chiedi l'età del passeggero
var anni = parseInt(prompt("Quanti anni hai?"));

// prezzo biglieto base per chilometro
var prezzoPerChilometro = 0.21;
document.getElementById('basic-price-ticket').innerHTML = prezzoPerChilometro;

// calcolare il prezzo del biglietto
var prezzoStandard = chilometri * prezzoPerChilometro;
