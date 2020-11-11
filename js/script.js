// chiedere all'utente il numero di chilometri che vuole percorrere
var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// chiedi l'età del passeggero
var anni = parseInt(prompt("Quanti anni hai?"));

// prezzo biglieto base per chilometro
var prezzoPerChilometro = 0.21;
document.getElementById('basic-price-ticket').innerHTML = prezzoPerChilometro;

// calcolare il prezzo del biglietto
var prezzoStandard = chilometri * prezzoPerChilometro;

// applicare lo sconto del 20%
var prezzoSconto20 = prezzoStandard * 20 / 100;
console.log(prezzoSconto20);

// applicare lo sconto del 40%
var prezzoSconto40 = prezzoStandard * 40 / 100;
console.log(prezzoSconto40);
