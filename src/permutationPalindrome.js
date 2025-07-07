/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
    const letters = new Map();
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if(!letters.has(char)) {
            letters.set(char, 1);
        } else {
            letters.set(char, letters.get(char) + 1);
        }
    }
    let odds = 0;
    for (const count of letters.values()) {
        if (count % 2 !== 0) odds++;
    }
    if ((word.length % 2 !== 0 && odds > 1) || (word.length % 2 === 0 && odds > 0)) return false;
    return true;
}

module.exports = permutationPalindrome;
