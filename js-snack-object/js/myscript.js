
// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore
//     Nome
//     Cognome
//     Età
//     Media punti fatti per partita
//     Percentuale di successo per tiri da 3 punti
//     Stoppate 
//     Tiri 

// Generare casualmente le statistiche di gioco, secondo queste regole:
//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//     la media punti fatti per partita deve essere compresa tra 0 e 50 x
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 x
//     le stoppate sono un numero intero compreso tra 0 e 30 x 
//     i tiri sono un numero intero compreso tra 20 e 100 x 


const basketballPlayer = [];

// const daniel = {
//     codiceGiocatore : 000000,
//     nome : 'Daniel',
//     cognome : 'Marella',
//     età : 27,
//     mediaPuntiPartita : 0,
//     percentualeSuccesso : 0,
//     stoppate: 20,
//     tiri: 2
// };

// basketballPlayer.push(daniel);
// console.log(basketballPlayer);

let randomMedia = randomPoint(0,50);

let randomPercentual = randomPoint(0, 100);

let randomStop = randomPoint (0, 30);

let randomPull = randomPoint (20, 100)

const daniel = {
    codiceGiocatore : 000000,
    nome : 'Daniel',
    cognome : 'Marella',
    età : 27,
    mediaPuntiPartita : randomMedia,
    percentualeSuccesso : randomPercentual,
    stoppate: randomStop,
    tiri: randomPull
};

basketballPlayer.push(daniel);

console.log(basketballPlayer);


function randomPoint(min, max){

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
}


