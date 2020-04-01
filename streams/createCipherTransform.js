const { Transform } = require('stream');
const { encrypt, decrypt } = require('../utils/caesar');

class CipherTransform extends Transform {
  /**
   *
   * @param {*} transformOptions
   * @param {number} shift
   * @param {Function} action
   */
  constructor(transformOptions, shift, action) {
    super(transformOptions);

    this.shift = shift;
    this.action = action;
  }

  /**
   *
   * @param {string} chunk
   * @param {string} encoding
   * @param {Function} callback
   */
  _transform(chunk, encoding, callback) {
    try {
      callback(null, this.action(this.shift, chunk.toString()));
    } catch (error) {
      callback(error);
    }
  }
}

/**
 * Creates transform stream, which encrypts string with the caesar cipher
 * @param {number} shift
 * @param {string} actionType
 */
const createCipherTransform = (shift, actionType) => {
  let action;

  switch (actionType) {
    case 'encode': action = encrypt; break;
    case 'decode': action = decrypt; break;
    default: throw new Error('Please use only decode/encode action type');
  }

  return new CipherTransform({ encoding: 'utf-8' }, shift, action);
}

module.exports = createCipherTransform;
