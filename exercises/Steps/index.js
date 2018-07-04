/**
 * Steps
 * 
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 * 
 * Examples:
 * steps(2) = '# '
 *            '##'
 *  
 * steps(3) = '#  '
 *            '## '
 *            '###'
 * 
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n) {
    return (
        new Array(n).fill(' ').map((_, key) => {
            console.log(
                new Array(n)
                    .fill(' ')
                    .fill('#', 0, key+1)
                    .join('')
            )
        })
    );
}

module.exports = steps;

