/* 

Check if a number is a prime number or not.

*/

//const number = parseInt(prompt("Enter a positive number: "))
const isPrime = number => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

console.log(isPrime(9))
//console.log(`${number} is ${(isPrime) ? '' : 'not '}a prime number`)