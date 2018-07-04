/**
 * Fizz Buzz
 * 
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 * 
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n) {
    return new Array(n).fill().map((_, key) => {
        const n = key+1;
        if((n % 3 === 0) && (n % 5 === 0)){
            console.log('fizzbuzz');
        } else if(n % 3 === 0){
            console.log('fizz');
        } else if(n % 5 === 0){
            console.log('buzz');
        } else {
            console.log(n);
        }
    });
}

module.exports = fizzBuzz;
