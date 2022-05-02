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

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

export function sumArray(numbers){
    if (numbers.length === 0) {
        return 0
    }
    if (numbers.length === 1) {
        return numbers[0]
    }

    let result = 0
    for (let i=0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result
}

// Calcula la media aritmética

export function averageNumbers(numbers){
    if (numbers.length === 0) {
        return undefined
    }
    if (numbers.length === 1) {
        return numbers[0]
    }

    let result = 0
    for (let i=0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result/numbers.length
}

// Array of Strings

let words2 = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];

export function averageWordLength(words){

    if (words.length === 0) {
        return undefined
    }
    if (words.length === 1) {
        return words[0].length
    }

    let result = 0
    for (let i=0; i < words.length; i++) {
        result += words[i].length
    }
    return result/words.length
}

// Unique Arrays

let words3 = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  

export function uniquifyArray(words3){
    if (words3.length === 0) {
        return undefined
    }
    if (words3.length === 1) {
        return words3 
}
    let newArray = []
    for (let i=0; i < words3.length; i++) {
        const elemento = words3[i]
    if (newArray.indexOf(elemento) === -1 ){
        newArray.push (elemento)
    }
}
    return newArray
}

//Busca elementos

let words4 = [
    'machine',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'truth',
    'disobedience'
  ];

export function doesWordExist(words4,search){
    if (words4.length === 0) {
        return false
    }
    let result = false
    for (let i=0; i < words4.length; i++) {
        const elemento = words4[i]
    if (words4[i] === search) {
        result = true
    }
    }
    return result 
}


export function howManyTimes(){}
export function greatestProduct(){}


