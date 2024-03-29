//Sum of Resistors in Series

/**
 *  Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
 * */

const sumaRes = resistenciaV => {
    let suma = 0;

    resistenciaV.forEach(resistencia => {
        if (resistencia < 0) {
            resistencia *= -1;
        }
        suma += resistencia;
    });

    console.log(`sumaRes ${suma} ohms`);

};
console.log(sumaRes([-1, 5, 6, 3]));
console.log(sumaRes([14, 3.5, 6]));
console.log(sumaRes([8, 15, 100]));

// Number divided into halves

/**
 * Given a number, return the number divided into its halves in an array.
 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

    let number = 0; inicialización
    numer >= 1; condicional
    number--; número de pasos
 */
const numDiv = num => {

    if (num >= 1) {

        let result = [num / 2, num / 2];
        return result;

    }

};

console.log(numDiv(4));
console.log(numDiv(10));

// Secret Society

/**
 * Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
 */
const secretName = mayus => {
    let secretName = mayus.map(name => name[0]).sort().join('');

    return secretName;

};

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));

//Online status

/**
 * Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */
const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];

function getUsers(arr) {
    const users = arr[0] + arr[1];
    return users;

}

const online = arr => {
    if (arr.length >= 3) {
        const allUsers = getUsers(users);
        console.log(`Users:  ${allUsers}, and ${arr.length - 2} are online`);
    } else {
        console.log(`Users: ${users(', ')}  and ${arr.length - 2} are online`);

    }

}
console.log(online(users));

//Array of Multiples

/**
 * Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */

function arrMultiplos(number, length) {

    let multiplos = [];

    for (let mul = 1; mul <= length; mul++) {
        multiplos.push(number * mul);
    }

    return multiplos;
}

console.log(arrMultiplos(2, 10));
console.log(arrMultiplos(17, 6));

//Positive dominance in Array

/**
 * Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 */

const numArr = [-1, 3, 5, 4, 6767];
const negativeArr = [-1, -3, -5, 4, 6767];

function positiveArr(arr) {
    let positiveCount = 0;
    arr.forEach((num) => {
        if (num > 0) {
            positiveCount++;
        }
    })
    const mid = arr.length / 2;
    return positiveCount > mid;

}
const res = positiveArr(negativeArr);
console.log(res);

//Antipodal Average

/**
 * Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
 */

function shorterArr(arr) {

    const middleIndex = Math.floor(arr.length / 2);
    const firstPart = arr.slice(0, middleIndex);
    const secondPart = arr.slice(-middleIndex);

    const summedArr = firstPart.map((num, index) => num + secondPart[secondPart.length - 1 - index]);

    const resultArr = summedArr.map(num => num / 2);

    return resultArr;
}

const inputArr = [1, 2, 3, 5, 22, 6];
const result = shorterArr(inputArr);
console.log(result);  