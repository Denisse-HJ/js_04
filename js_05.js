/*  1 User profile */


let user = window.prompt("What's your username?");

let age = window.prompt("how old are you?");

let movie = [];

for (index = 0; index < 3; index++) {
    let dato = prompt("write your favorite movies");
    movie.push(dato);
}

    console.log(`Username: ${user} Age: ${age} and the film ${movie[0]} is one of my favorites`);

/* 2 Highest number */


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


let seconds = prompt('You want to set a sleep alert, tell me in how many seconds:')
seconds = seconds * 1000;
//convierte a un número entero.
let convertido = parseInt(seconds, 10);

setTimeout(() => {
    console.log(`Sleep time after  ${seconds / 1000}  seconds`);
}, convertido);


/* 4 Palindrome */

function palindrome (word) {

     //Genero un ciclo para ue hasta que se cumpla el if-else me imprima el mensaje, de lo contrario el prompt no se cerrara.

        let remp = word.toLowerCase().replace(/[^A-Za-z0-9]/g); //convierte a minusculas con .toLowerCase y .replace(....)elimina todos los caracteres que no son letras o números.
        let len = remp.length;
            
        for (var i = 0; i < len / 2; i++) {    
            if (remp[i] !== remp[len - 1 - i]) {
                return false;
        }
    }
    return true;
}

while (true) { //Genero un ciclo para ue hasta que se cumpla el if-else me imprima el mensaje, de lo contrario el prompt no se cerrara.
let word = window.prompt("Write a word or sentence"); 
    if (palindrome(word)) {
        console.log(`${word} is a palindrome word or sentence`)// aqui en la consola
        break;
    } else {
        console.log(`${word} is not a palindrome word or sentence`);
    }
}

/* 5 Factorial */

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



    
/* 6 Flat array */

function flatArray(matrix) {
    
let ejemplo = []; 
 

    function convertir (dimension) {
        for (let i = 0; i < dimension.length; i++) {
            if (Array.isArray(dimension[i])) {
                convertir(dimension[i]); 
            } else {
                ejemplo.push(dimension[i]); 
            }
        }
    }
    convertir(matrix); //realiza una operación recursiva para procesar cada elemento del array.
    return ejemplo;
    
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]]; 

let resFlatArray = flatArray (multiDimension);// mando a llamar con un nuevo nombre la funcion con los parametros de multiDimension.
console.log(resFlatArray); //imprimo el resultado.
