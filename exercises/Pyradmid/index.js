/**
 * Pyramid
 * 
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 * 
 * Examples:
 * pyramid(1) = '#'
 * 
 * pyramid(2) = ' # '
 *              '###'
 * 
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

const pyradmid = h => (
    new Array(h)
        .fill('')
        .map((_, key) => (
            new Array(h + key)
                .fill('#')
                .fill('-', 0, h - (key + 1))
        ).join('')
        ).join('\n')
);

module.exports = pyradmid;
