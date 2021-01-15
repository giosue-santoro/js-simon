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

//Funzione che controlla che i 5 numeri casuali siano diversi 
function numberCheck(userNumber,userArray) {
    if (userArray.includes(userNumber)) {
        return true;
    } else {
        return false;
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
alert('Questi sono i numeri generati dal pc: ' + pcArray);
