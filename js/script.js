//Selettori
var userNumber;
var pcNumber;
var userArray;
var pcArray;

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