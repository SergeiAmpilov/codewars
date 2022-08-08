/*
findUnique.js
https://www.codewars.com/kata/585d7d5adb20cf33cb000235
*/

function findUniq(arr) {

    const acc = {};

    for (let i = 0; i < arr.length; i++) {
        const element = '' + arr[i];

        if (acc[element]) {
            acc[element] += 1;
        } else {
            acc[element] = 1;
        }        
    }

    for (key in acc) {
        if (acc[key] === 1) {
            return Number(key);
        }
    }

    return false;
}
  

console.log(findUniq([ 3, 10, 3, 3, 3 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));