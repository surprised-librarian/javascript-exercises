const palindromes = function (str) {
    let str1 = str.toLowerCase();
    let str2 = removePunctuation(str1);
    let str3 = str1;
    function removePunctuation(text) {
        return text.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('');
    }
    let str4 = removePunctuation(str2);
    str5 = str4.split('').reverse().join('');

     if (str2 === str5) {
        return true;
    } else {
        return false;
    }
}; 



// Do not edit below this line
module.exports = palindromes;

