// 1. Fish Bash Loop
function fishBashLoop(number) {
    // handle number only
    if (typeof number !== 'number') {
        console.log('Parametes must be number');
        return null;
    }

    // number start from 1
    for (i = 1; i <= number; i++) {
        // save reused condition on variable
        const condition1 = (i % 3) === 0;
        const condition2 = (i % 5) === 0;

        // early continue
        if (condition1 && condition2) {
            console.log("fish bash");
            continue;
        }
        if (condition1) {
            console.log("fish");
            continue;
        }
        if (condition2) {
            console.log("bash");
            continue;
        }

        // else return
        console.log(i);
    }
}

// 2. Array sorting
const SORT_TYPE = {
    ASC: 'ASC',
    DESC: 'DESC'
}

function sort(numberArr, sort = SORT_TYPE.ASC) {
    // handle array only
    if (!Array.isArray(numberArr)) {
        console.log('First parameter must be array');
        return null;
    }

    // filter array number only
    const filteredArr = [];
    numberArr.forEach(number => {
        if (typeof number === 'number') filteredArr.push(number);
    });

    // sort number array
    function comparator(valueA, valueB) {
        if (sort === SORT_TYPE.DESC) {
            return valueA < valueB;
        }
        return valueA > valueB;
    }

    for (let i = 0; i < filteredArr.length; i++) {
        for (let j = 1; j < filteredArr.length; j++) {
            if (comparator(filteredArr[j - 1], filteredArr[j]))
                [filteredArr[j - 1], filteredArr[j]] = [filteredArr[j], filteredArr[j - 1]];
        }
    }

    return filteredArr;
}

// 3. Palindrom checker
function isPalindrom(string, strict = false) {
    // handle string only
    if (typeof string !== 'string') {
        console.log('First parameter must be string');
        return null;
    }

    // char handler always true when length <=1
    if (string.length <= 1) return true;

    // strict option (case sensitive)
    if (!strict) string = string.toLowerCase();

    // classic loop logic
    const len = Math.floor(string.length / 2);
    for (let i = 0; i < len; i++)
        if (string[i] !== string[(string.length - 1) - i])
            return false;
    return true;

    // fancy method
    // return string === string.split('').reverse().join('');
}

module.exports = {
    fishBashLoop,
    SORT_TYPE,
    sort,
    isPalindrom
  }