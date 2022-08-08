/*
https://www.codewars.com/kata/5277c8a221e209d3f6000b56
*/

function validBraces(braces){
    const openBraces  = ['(', '{', '['];
    const correctPairs = ['()', '{}', '[]'];

    const checkStack = [];
    for (let i = 0; i < braces.length; i++) {
        const element = braces[i];
        
        if (openBraces.indexOf(element) !== -1) {
            checkStack.push(element);
        } else {
            if (checkStack.length < 1) {
                return false;
            }

            const lastBr = checkStack.pop();

            if (correctPairs.indexOf(lastBr + element) === -1) {
                return false;
            }
        }        
    }
    
    return checkStack.length === 0;
}

console.log(
    validBraces("}(){}[]")
);