/* 

Check if a number is a prime number or not.

*/

const number = parseInt(prompt("Enter a positive number: "))
let isPrime = true;

if (number > 1) {
    for(let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false;
}

console.log(`${number} is ${(isPrime) ? '' : 'not '}a prime number`)