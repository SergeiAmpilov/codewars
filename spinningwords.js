/*
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
*/

function spinWords(string){

    const fSplitWord = (word) => {
        return word.length >= 5
            ? word.split('').reduce( (acc, item) => item + acc, '')
            : word        
    }

    return string.split(' ').map(fSplitWord).join(' ');
}

console.log(
    spinWords('Hey fellow warriors')
);