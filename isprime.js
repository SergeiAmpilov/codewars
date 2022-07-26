/*
https://www.codewars.com/kata/5262119038c0985a5b00029f
*/

function isPrime(num) {
    if (num <= 1) {
        return false
    }

        
    for (let index = 2; index <= Math.floor(Math.sqrt(num)); index++) {
        if (num % index === 0) {
            return false;
        }
    }

    return true;

}
  

console.log(isPrime(6));