/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
    if ( a > b) {
        return a
    } else {
        return b
    }
}

// Encuentra la palabra más larga

let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];

export function findLongestWord(words) {
    if (words.length === 0) 
    { 
        return undefined
    }
    if (words.length === 1) {
        return words[0]
    }
    let longest = "" 
    for (let i=0; i < words.length; i++) {
        if (words[i].length > longest.length)
         longest = words[i]
    }
    
    return longest
}

//Calcula la suma

export function sumArray(){}

// Calcula la media aritmética

export function averageNumbers(){}


export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(){}
export function howManyTimes(){}
export function greatestProduct(){}





