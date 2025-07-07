/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
    const anagramsMap = new Map();

    for (const word of words) {
        const sorted = word.split('').sort().join('');
        if(!anagramsMap.has(sorted)) {
            anagramsMap.set(sorted, [word]);
        } else {
            anagramsMap.get(sorted).push(word);
        }
    }

    const solution = Array.from(anagramsMap.values());
    return solution;
}

module.exports = anagramGroups;
