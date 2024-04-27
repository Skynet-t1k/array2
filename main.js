// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output
// la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.



function mediaArray(arrayFunc){
    let sumfunc = arrayFunc.reduce((acc, n)=> acc + n);
    let mediafunc = sumfunc/arrayFunc.length
    return mediafunc;
}

inputArray = [3, 5, 10, 2, 8];
media = mediaArray(inputArray);

let infMedia = inputArray.filter((input)=> input < media);
let supMedia = inputArray.filter((input)=> input > media);
console.log(`media = ${media}, valori minori = ${infMedia}, valori maggiori = ${supMedia}`);

