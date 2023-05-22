

/*

Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

*/




let parola1 = prompt('inserisci una parola');
let parola2 = prompt('inserisci una parola');

function Length(word1, word2){
    if (parola1.length === parola2.length){
        let isSameLength = word1 + word2;
        console.log(isSameLength);
        return true;
    }
    else if (parola1.length > parola2.length){
        let isSameLength = parola1;
        console.log(isSameLength);
        return false; 
    }
    
    else if (parola1.length < parola2.length){
        let isSameLength = parola2;
        console.log(isSameLength);
        return false;
    }
}

let isSameLength = Length(parola1, parola2);
console.log(isSameLength);
