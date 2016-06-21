/**
 * @param {string} s
 * @return {string}
 */
// var reverseString = function(s) {
//     var separateLetters = s.split('');
//     var reverseLetters = separateLetters.reverse();
//     var joinNewWord = reverseLetters.join('');
//     return joinNewWord;
// };

// Refactored
var reverseString = function(s) {
    var reverseLetters = s.split('').reverse().join('');
    return reverseLetters;
};
