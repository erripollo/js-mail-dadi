//Generare un numero random da 1 a 6, sia per il giocatore
var userNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById('user_number').innerHTML = userNumber
console.log(userNumber);

//sia per il computer.
var pcNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById('pc_number').innerHTML = pcNumber
console.log(pcNumber);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
switch (true) {
    case userNumber > pcNumber:
        document.getElementById('msg').innerHTML = 'Ha vinto il giocatore!'
        console.log('Ha vinto il giocatore!');
        break;
    
    case userNumber == pcNumber:
        document.getElementById('msg').innerHTML = 'Pareggio!'
        console.log('Pareggio!');
        break;    

    case userNumber < pcNumber:
        document.getElementById('msg').innerHTML = 'Ha vinto il PC!'
        console.log('Ha vinto il PC!');
        break;
}