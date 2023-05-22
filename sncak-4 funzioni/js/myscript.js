

/*

Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

*/




let word1 = prompt('inserisci una parola');
let word2 = prompt('inserisci una parola');

function Length(word1, word2){
    if (word1.length === word2.length){
        let isSameLength = word1 + word2;
        console.log(isSameLength);
        return true;
    }
    else if (word1.length > word2.length){
        let isSameLength = word1;
        console.log(isSameLength);
        return false; 
    }
    
    else if (word1.length < word2.length){
        let isSameLength = word2;
        console.log(isSameLength);
        return false;
    }
}

let isSameLength = Length(word1, word2);
console.log(isSameLength);
