/**
 * Vowels
 * 
 * Write a function which returns number of vowels in given string.
 * 
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const vowelsList = ['a', 'e', 'i', 'o', 'u'];

function vowels(string) {
    return string.toLowerCase().split('').reduce((acc, char) => vowelsList.includes(char) ? acc+1 : acc ,0);
}

module.exports = vowels;

