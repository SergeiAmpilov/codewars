/*
theBaker.js
https://www.codewars.com/kata/525c65e51bf619685c000059
*/

function cakes(recipe, available) {

    let minVal = -1;
    for (key in recipe) {
        if (!available[key]) {
            return 0;
        }

        const curVal = Math.floor(available[key] / recipe[key]);

        if (minVal === -1 || minVal > curVal) {
            minVal = curVal;
        }
    }

    return minVal;
}

console.log(
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
)
