/**
 * Checks whether a char is a Latin char
 * @param {string} char
 * @returns {boolean}
 */
const isLatinChar = char => /[a-z]/gi.test(char);

module.exports = isLatinChar;
