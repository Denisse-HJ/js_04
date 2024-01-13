/*  1 User profile */
/*

let user = window.prompt("What's your username?");

let age = window.prompt("how old are you?");

let movie = [];

for (index = 0; index < 3; index++) {
    let dato = prompt("write your favorite movies");
    movie.push(dato);
}

    console.log(`Username: ${user} Age: ${age} and the film ${movie[0]} is one of my favorites`);

/* 2 Highest number */
/*

let number = [];

for (let i = 0; i < 10; i++) {
    let valor = prompt("write an number");
    number.push(valor);
}

let max = number.reduce(function (a, b) {
    return Math.max(a, b);
}, -Infinity);

    console.log(`The largest number is: ${max}`);


/* 3 Alarm */

/*
let seconds = prompt('You want to set a sleep alert, tell me in how many seconds:')
seconds = seconds * 1000;
//convierte a un número entero.
let convertido = parseInt(seconds, 10);

setTimeout(() => {
    console.log(`Sleep time after  ${seconds / 1000}  seconds`);
}, convertido);


/** 4 Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/



/** 5 Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */

    while (true) { //Genero un ciclo para ue hasta que se cumpla el if-else me imprima el mensaje, de lo contrario el prompt no se cerrara.
        let n = prompt("write an integer number"); 

        let conv = parseInt(n, 10); //convierto a numero entero

        if (1 <= conv) {
            console.log(`The number you provided is: ${conv} and the factorial of this number is ${factorial(conv)}`)// aqui en la consola
            break;
        } else {
            console.log("Please enter a numerical value greater than 1.");
        }
    }

function factorial(conv) { // Función factorial que pone como parametro conv
        if (conv === 1) { //si conv = 1 con el reguiente return 1; rompe, pero si da otro valor continua en return conv.
        return 1;
}   
        return conv * factorial(conv - 1); //este multiplica conv * factorial, pero con -1.
}



    
/** 6Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
Use any type of algorithm you want like callbacks, recursion, etc...


let multiDimension = [1, [2, 3, [4, 5, [6]]]];


*/ 