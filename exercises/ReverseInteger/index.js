/**
 * Reverse Integer
 * 
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 * 
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

const reverse = (int) => {
    return parseInt(`
        ${Math.sign(int) === -1 ? '-' : ''}${int.toString().split('').reverse().join('')}
    `);
}

module.exports = reverse;



