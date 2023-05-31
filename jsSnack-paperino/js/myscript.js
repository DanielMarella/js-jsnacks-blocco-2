/**
 *
 *
 *
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */

const cartoonName = ['pippo', 'PLUTO', 'PapERino'];
const cartoon = [];

console.log(cartoonName)

cartoonName.forEach((word) => {
    const newCartoon = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    cartoon.push(newCartoon);
})
console.log(cartoon)