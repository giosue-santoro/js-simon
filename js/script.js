//Selettori
var userNumber;
var userArray;
var pcArray;
var minRange = 1;
var maxRange = 20;
var pcLength = 5;


//Funzione per creare i numeri casuali
function randomN(min, max) {
    var randomArray;
    for (let i = min; i <= max; i++) {
        randomArray = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomArray;
}

// Funzione che controlla che i 5 numeri casuali siano diversi 
// function numberCheck(userNumber,userArray) {
//     if (userArray.includes(userNumber)) {
//         return true;
//     } else {
//         return false;
//     }
// }

//Funzione per chiedere numero all'utente
function askN() {
    for (let n = 0; n < 5; n++) {
        userNumber = parseInt(prompt('Inserisci i 5 numeri mostrati'));
        if (isNaN(userNumber)) {
          alert('Puoi inserire solo numeri');
        } else {
        userArray.push(userNumber);
        console.log('Numeri scelti da utente: ' + userNumber);
        }
      }
        
}

//Genero e mostro numeri da ricordare all'utente
pcArray = [];
userArray = [];

while (pcArray.length < pcLength) {
    n = randomN(minRange, maxRange);
    if (pcArray.indexOf(n) === -1) {
        pcArray.push(n);
    }
}

console.log('Questi sono i numeri generati dal pc: ' + pcArray);
alert('Questi sono i numeri generati dal Pc: ' + pcArray);

//Chiedo all'utente i numeri che gli ho mostrato nell'alert tramite prompt
setTimeout(askN, 30000);

//Controllo se i numeri scelti dall'utente corrispondono ai numeri generati dal PC
setTimeout(function() {
    if (pcArray.includes(userNumber)) {
        alert('Congratulazioni, hai vinto!')
    } else {
        alert('Uno o più numeri errati')
    }
}, 40000)