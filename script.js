
//Il pulsante prende le informazioni scritte dall'utente e le porta nel div riepilogo
var pulsanteGenera = document.getElementById("generate");

//Fa apparire il div riepilogo con tutte le info
pulsanteGenera.addEventListener('click',
function() {

//Tutte le variabili
  var nomeCognome = document.getElementById('name').value;
  var chilometri = document.getElementById('km').value;
  var age = document.getElementById('age').value;
  var prezzo = chilometri * 0.21;
  var offerta = 'Standard';
  var sconto;
  var prezzoFinale = prezzo;

//Le condizioni per applicare gli sconti
  if (age == 'minorenne') {
    offerta ='Biglietto Baby'
    sconto = prezzo * 20 / 100;
    prezzoFinale = prezzo - sconto;
  }else if (age == 'over65') {
    offerta = 'Biglietto Shifu'
    sconto = prezzo * 40 / 100;
    prezzoFinale = prezzo - sconto;
  }

//Fa apparire in console le info
  console.log(nomeCognome);
  console.log(chilometri);
  console.log(age);
  console.log(prezzoFinale)

//Collega i risultati delle variabili nel riepilogo e genera numeri casuali
  document.getElementById('nome-pass').innerHTML = nomeCognome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;
  document.getElementById('codice').innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;
  document.getElementById('costo').innerHTML = prezzoFinale.toFixed(2);

  document.getElementById('riepilogo').className = 'show';
}
);

//Pulsante annulla che serve a far scomparire tutte le informazioni
var pulsanteAnnulla = document.getElementById("abort");
pulsanteAnnulla.addEventListener('click',
function() {

  document.getElementById('nome-pass').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice').innerHTML = '';
  document.getElementById('costo').innerHTML = '';

  document.getElementById('riepilogo').className = 'hidden';
}
);