

// Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi

// const randomNumberArray= [];


// let number = randomGenerator(1, 5);

// console.log(number);

// for(let i = 0; i < 4; i++){
    //     randomNumberArray.push(number);
    //     if(randomNumberArray.length == 4 || randomNumberArray[i] == number){
        //         number ++;
        //         randomNumberArray.push(number);
        //     }
        // }
        // console.log(randomNumberArray);


//******************************************************************************************* */  
        
        function getRandomUniqueNumber( minNum, maxNum, elements ){
            const numbersList = [];
        
            if ( (maxNum - minNum) < elements ){
                return [];
            }
        
            while (numbersList.length < elements){
                const newRandomNumber = getRandomInt(minNum, maxNum);
                if (!numbersList.includes(newRandomNumber)){
                    numbersList.push(newRandomNumber);
                }
            }
        
            return numbersList;
        }

function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
    return randomNumber;
}