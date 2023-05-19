

/*

Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
*/



let sum = 0;
let numberList = [];

while (sum < 50){
    let userNumber = parseInt(prompt('digita un numero'));
    sum += userNumber;
    numberList.push(userNumber);
    console.log(numberList)
    console.log(sum);
}