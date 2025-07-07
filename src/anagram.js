/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if (s1.length !== s2.length) {
    return false;
  }

  const chars = new Map();

  for (let i = 0; i < s1.length; i++) {
    chars.set(s1[i], (chars.get(s1[i]) || 0) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    if (!chars.has(s2[i])) {
      return false;
    }
    chars.set(s2[i], chars.get(s2[i]) - 1);
    if (chars.get(s2[i]) < 0) {
      return false;
    }
  }

  for (const count of chars.values()) {
    if (count !== 0) return false;
  }
  return true;
}

module.exports = anagram;
