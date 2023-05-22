
// Snack in classe

// Calcola la somma e la media dei primi 10 numeri 
// media = somma di tutti i numeri / il numero dei numeri 


let  countNumber = 0;

let sumNumber = 0 ;

let mediaNumber = 0; 

while (countNumber < 10 ){
    const userNumber = parseInt(prompt('inserisci i primi 10 numeri'));
    sumNumber += userNumber
    console.log('sumnumber = ' + sumNumber);
    countNumber = countNumber + 1;
    console.log(countNumber);
}

mediaNumber = sumNumber / countNumber;

console.log('mediaNumber = ' + mediaNumber);