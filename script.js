/*Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.*/


// prezzo del biglietto per km(0,21)
const priceKm = 0.21;
console.log('priceKm' , priceKm);

//sconto del 20% per i minorenni
const discount20 = 20;
console.log('discount20');

//sconto del 40% per gli over 65
const discount40 = 40;
console.log('discount40');

// età dell'utente 
const age =  ("Inserisci la tua età")
console.log('age' , age);

//km che deve percorrere l'utente
const kmUser = parseInt(('Inserisci i km da percorrere' , 100));
console.log('kmUser' , kmUser);



//calcolo pricekm x kmuser
let price = priceKm * kmUser;
console.log('price' , price);

let newPrice = price;

//calcolo sconto per under 18 e over 65
if (age < 18) {
    newPrice = price - (price / 100 * discount20);
    console.log('discount under 18');
} else if (age > 65) {
    newPrice = price - (price / 100 * discount40);
    console.log('discount over 65');
}

console.log('newPrice' , newPrice);

const eleBtnRandom = document.querySelector('.btn-random');

eleBtnRandom.addEventListener('click',function(){
alert(newPrice);

})


