//Generare un numero random da 1 a 6, sia per il giocatore
var userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

//sia per il computer.
var pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
switch (true) {
    case userNumber > pcNumber:
        console.log('Ha vinto il giocatore!');
        break;
    
    case userNumber == pcNumber:
        console.log('Pareggio!');
        break;    

    case userNumber < pcNumber:
        console.log('Ha vinto il PC!');
        break;
}