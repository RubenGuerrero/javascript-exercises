/**
 * Max Char
 * 
 * For given string return the character that is most
 * commonly used in the string.
 * 
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
    const nObject = str.split('').reduce((acc, char) => {
        if(Object.keys(acc).indexOf(char) === -1){
            acc[char] = 1;
        } else {
            acc[char] = acc[char] + 1;
        }
        return acc;
    }, {});

    return Object.keys(nObject).reduce((acc, char) => {
        if(nObject[char] >= acc.n){
            acc.char = char;
            acc.n = nObject[char];
            return acc;
        }

        return acc;
    }, { char: '', n: 0 }).char;
}

module.exports = maxChar;
