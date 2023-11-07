 // Chiedo all'utente di inserire il numero di chilometri da percorrere
let km = parseFloat(prompt("Inserisci il numero di chilometri da percorrere: "));

// Chiedo all'utente di inserire l'età del passeggero
let eta = parseInt(prompt("Inserisci l'età del passeggero: "));
    
// Calcolo il prezzo del biglietto in base ai km (0.21 € al km)
let prezzoBiglietto = km * 0.21;
    
// Determinare lo sconto in base all'età del passeggero
let sconto = 0;
   if (eta < 18) {
         sconto = 0.20;
     } else if (eta >= 65) {
         sconto = 0.40;
     }
    
// Calcolare il prezzo finale del biglietto con lo sconto
let prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
    
// Visualizzare il prezzo finale del biglietto in forma umana (con massimo due decimali)
document.write("Il prezzo totale del biglietto di viaggio è: €" + prezzoFinale.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    
//Visualizza le informazioni sulla console
console.log("Il prezzo finale del biglietto è: €" + prezzoFinale.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
console.log("I km percorsi sono: " + km);
console.log("L'età del passeggero è: " + eta);
console.log("Lo sconto applicato è: " + sconto);
        