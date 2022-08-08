/*
replaceWithAlphabetPosition.js
https://www.codewars.com/kata/546f922b54af40e1e90001da
*/



function alphabetPosition(text) {
    return text.toLowerCase().split('').map( (item) => {
        if (!item.match(/[a-z]/)) {
            return -1;
        }
        return item.charCodeAt(0) - 'a'.charCodeAt(0) + 1
    }).filter(el => el > 0).join(' ');
}

console.log(
    alphabetPosition("._!63;={")
);