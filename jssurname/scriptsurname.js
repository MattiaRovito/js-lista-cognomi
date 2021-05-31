// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


var surname = prompt('Qual è il tuo cognome?')
// console.log(surname);

surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();


var otherSurname = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
// console.log(otherSurname);

otherSurname.push(surname); 
otherSurname = otherSurname.sort()

document.getElementById('order').innerHTML = otherSurname;