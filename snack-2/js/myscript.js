

/*

Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

*/




let randomNumber = Math.floor(Math.random() * 100) + 1;

let userNumber = prompt('inserisci un numero da 1 a 100');

while(userNumber != randomNumber){

    if (userNumber > randomNumber){
        console.log('il tuo numero è più grande')
        
    }
    
    else if (userNumber < randomNumber){
        console.log('il numero è più piccolo')
    }
    userNumber = prompt('inserisci un numero da 1 a 100');

}
console.log('hai indovinato');