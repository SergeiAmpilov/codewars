/*
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
*/


function XO(str) {
    const arr = str.toLowerCase().split('');
    return arr.filter( el => el === 'x').length === arr.filter( el => el === 'o').length;
}

console.log(
    XO("ooxx")
);