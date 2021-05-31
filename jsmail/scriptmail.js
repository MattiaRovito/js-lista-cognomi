// Mail
// Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.


var mailUtente = prompt('Qual è la tua mail?')
var mailUtente = mailUtente.toLowerCase();
// console.log(mailUtente);


var mailList = ['marco@gmail.com', 'paolo@gmail.com', 'michele@gmail.com', 'giovanni@gmail.com', 'francesco@gmail.com'];

var veroFalso = 'la mail non è presente nel database'

for(var i = 0; i < mailList.length; i++){
    if (mailUtente == mailList[i]){
        veroFalso = 'la mail è presente nel database';
    } 
}

document.getElementById('utente').innerHTML = veroFalso;