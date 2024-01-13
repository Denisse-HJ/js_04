/*  User profile */


let user = window.prompt("What's your username?");

let age = window.prompt("how old are you?");

let movie = [];

for (index = 0; index < 3; index++) {
    let dato = prompt("write your favorite movies");
    movie.push(dato);
}

    console.log(`Username: ${user} Age: ${age} and the film ${movie[0]} is one of my favorites`);

/* Highest number */


let number = [];

for (let i = 0; i < 10; i++) {
    let valor = prompt("write an number");
    number.push(valor);
}

let max = number.reduce(function (a, b) {
    return Math.max(a, b);

}, -Infinity);

    console.log(`The largest number is: ${max}`);


/* Alarm */


let seconds = prompt('You want to set a sleep alert, tell me in how many seconds:')
seconds = seconds * 1000;
//convierte a un número entero.
let convertido = parseInt(seconds, 10);

setTimeout(() => {
    console.log(`Sleep time after  ${seconds / 1000}  seconds`);
}, convertido);


/** Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/



/**
 * Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */

function number() {
    let conv;

    while (true) {
        let n = prompt("write an integer number"); 

        let conv = parseInt(n, 10);

        if (1 <= conv) {
            console.log(`The number you provided is: ${conv}`);
            break;
        } else {
            console.log("Please enter a numerical value greater than 1.");
        }
    }

    return conv;
}
number();

    
/**
 * Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
Use any type of algorithm you want like callbacks, recursion, etc...


let multiDimension = [1, [2, 3, [4, 5, [6]]]];


 */
