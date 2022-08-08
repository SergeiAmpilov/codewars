/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b
*/


function towerBuilder(nFloors) {
    const result = [];
    const repeater = (n, char) => {
        let str = '';
        for (let i = 0; i < n; i++) {
            str += char;
        }
        return str;
    }

    for (let index = 1; index <= nFloors; index++) {
        const starStr = repeater(2 * index - 1, '*');
        const spacesCount = (2 * nFloors - 1 - starStr.length) / 2;
        const spaceStr =  repeater(spacesCount, ' ');

        result.push( spaceStr + starStr + spaceStr);
    }

    return result;
}

console.log(
    towerBuilder(6)
);