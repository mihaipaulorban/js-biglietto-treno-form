
var pulsanteGenera = document.getElementById("generate");
pulsanteGenera.addEventListener('click',
function() {

  var nomeCognome = document.getElementById('name').value;
  var chilometri = document.getElementById('km').value;
  var age = document.getElementById('age').value;
  var prezzo = chilometri * 0.21;
  var offerta = 'Standard';
  var sconto;
  var prezzoFinale = prezzo;

  if (age == 'minorenne') {
    offerta ='Sconto minorenne'
    sconto = prezzo * 20 / 100;
    prezzoFinale = prezzo - sconto;
  }else if (age == 'over65') {
    offerta = 'Sconto Silver'
    sconto = prezzo * 40 / 100;
    prezzoFinale = prezzo - sconto;
  }

  console.log(nomeCognome);
  console.log(chilometri);
  console.log(age);
  console.log(prezzoFinale)
}
);