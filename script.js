function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let romanNumeral = '';

    for (let key in obj) {
        const symbol = obj[key][0];
        const value = obj[key][1];

        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }

        // Check for subtraction numerals (IV, IX, etc.)
        if (key % 2 === 0) {
            const nextKey = parseInt(key) - 1;
            const nextSymbol = obj[nextKey][0];
            const nextValue = obj[nextKey][1];
            const subtractionSymbol = nextSymbol + symbol;
            const subtractionValue = value - nextValue;

            if (num >= subtractionValue) {
                romanNumeral += subtractionSymbol;
                num -= subtractionValue;
            }
        }
    }

    return romanNumeral;
}

console.log(convertToRoman(14)); // XIV
console.log(convertToRoman(798)); // DCCXCVIII



// do not edit below this line
module.exports = convertToRoman
