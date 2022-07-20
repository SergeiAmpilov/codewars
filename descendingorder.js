/*
descendingorder.js
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
*/

function descendingOrder(n){
    
    let str = n.toString()
    const arr = []

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        arr.push(parseInt(str[index]))        
    }

    return parseInt(arr.sort((a, b) => b-a).join());
}

console.log(descendingOrder(123456789))