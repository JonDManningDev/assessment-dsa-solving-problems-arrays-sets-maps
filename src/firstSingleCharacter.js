/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const letters = new Map();
  for (i = 0; i < word.length; i++) {
    const char = word[i];
    if (!letters.has(char)) {
      letters.set(char, 1);
    } else {
      letters.set(char, letters.get(char) + 1);
    }
  }

  for (i = 0; i < word.length; i++) {
    const char = word[i];
    if (letters.get(char) === 1) return char;
  }

  return null;
}

module.exports = firstSingleCharacter;
