

// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutti i peperoni.

// Bonus: 
// crea un peperone con una funzione



const typeOfPeperone = [];


const peperoneVariety = {
    varietà  : ['giallo', 'rosso', 'verde', 'marrone', 'blu', 'bianco', 'rosa', 'fucsia', 'nero', 'blallo'],
    peso : ['10g', '11g', '12g', '13g', '14g' ,'15g' ,'16g' ,'17g', '18g', '19g'],
    lunghezza : ['11cm', '12cm', '13cm', '14cm', '15cm', '16cm', '17cm', '18cm', '19cm', '20cm',]  
}

let sum = 0;
for(let i = 0; i < typeOfPeperone.length; i++){
    sum = peso[i];
    console.log(sum);
}

typeOfPeperone.push(peperoneVariety);
console.log(typeOfPeperone);




