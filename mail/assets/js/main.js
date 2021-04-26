//Chiedi all’utente la sua email,
var email = prompt('Inserisci la tua email').toLowerCase();
console.log(email);

//controlla che sia nella lista di chi può accedere,
var mailList = ['prova@gmail.com', 'enrico@gmail.com', 'boolean@gmail.com', 'mail@gmail.com'];

mailList.push('ciao@gmail.com', 'js@gmail.com')

//stampa un messaggio appropriato sull’esito del controllo.
switch (true) {
    case mailList.includes(email):
        document.getElementById('msg_ok').innerHTML = 'La tua email è presente nell\'elenco!'
        console.log('La tua email è presente nell\'elenco!');
        break;

    default:
        document.getElementById('msg_not').innerHTML = 'La tua email non è presente nell\'elenco!'
        console.log('La tua email non è presente nell\'elenco!');
        break;
}