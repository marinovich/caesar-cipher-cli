const isLatinChar = require('./isLatinChar');
const { ABC_LENGTH, LOWERCASE_SHIFT, UPPERCASE_SHIFT } = require('../constants');

/**
 * Encrypts text with the caesar cipher
 * @param {number} shift
 * @param {string} text
 * @returns {string}
 */
const encrypt = (shift, text) => String.fromCharCode(...[...text].map((char) => {
  const caseShift = char.charCodeAt() >= LOWERCASE_SHIFT ? LOWERCASE_SHIFT : UPPERCASE_SHIFT;

  return isLatinChar(char)
    ? (char.charCodeAt() - caseShift + shift % ABC_LENGTH) % ABC_LENGTH + caseShift
    : char.charCodeAt();
}));

/**
 * Decrypts text with the caesar cipher
 * @param {number} shift
 * @param {string} text
 * @returns {string}
 */
const decrypt = (shift, text) => {
  return encrypt(ABC_LENGTH - shift, text);
}

module.exports = { decrypt, encrypt };
