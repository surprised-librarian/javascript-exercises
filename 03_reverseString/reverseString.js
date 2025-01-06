const reverseString = function(string) {
    return string.split('').reverse().join('');
}

reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
