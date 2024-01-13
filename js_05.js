/*  User profile */

/** 
let user = window.prompt("What's your username?");

let age = window.prompt("how old are you?");

    let movie = [];

    for (index = 0; index < 3; index++) {
        let dato = prompt("write your favorite movies");
        movie.push(dato);
    }
    
        console.log(`Username: ${user} Age: ${age} and the film ${movie[0]} is one of my favorites`);
*/
/* Highest number */


/** let number = [];

    for (let i = 0; i < 10; i++) {
        let valor = prompt("write un number");
        number.push(valor);  
    }

    let max = number.reduce(function (a, b) {
        return Math.max(a, b);
        
    }, -Infinity);   
    
        console.log(`The largest number is: ${max}`);
*/        

/**
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) 
is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */


    let seconds = prompt('You want to set a sleep alert, tell me in how many seconds:')
    seconds = seconds * 1000;
    let convertido = parseInt(seconds, 10);

    setTimeout(() => {
        console.log(`Sleep time after  ${seconds/1000}  seconds`);
      }, convertido);

/**
 * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 */



/**
 * Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */



/**
 * Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
Use any type of algorithm you want like callbacks, recursion, etc...


let multiDimension = [1, [2, 3, [4, 5, [6]]]];
 */
