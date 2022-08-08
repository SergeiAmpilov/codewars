/*
countingDuplicates.js
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
*/

function duplicateCount(text){

    let counter = 0;

    const accObj = text.toLowerCase().split('').reduce((acc, item) => {
        if (acc[item]) {
            acc[item] += 1;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});

    for (k in accObj) {
        if (accObj[k] > 1) {
            counter++;
        }
    }

    return counter;
}


  console.log(
    duplicateCount("indivisibility")
  );