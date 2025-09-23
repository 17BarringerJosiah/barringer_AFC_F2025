module.exports.isPalindrome = isPalindrome;

function isPalindrome(str){
    if (typeof str !== 'string'){
        throw new Error('Input must be a string.');
    }
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}