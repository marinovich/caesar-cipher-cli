const { Transform } = require('stream');
const { encrypt, decrypt } = require('../utils/caesar');

class CipherTransform extends Transform {
  /**
   *
   * @param {*} transformOptions
   * @param {number} shift
   * @param {string} actionType
   */
  constructor(transformOptions, shift, actionType) {
    super(transformOptions);

    this.shift = shift;
    this.actionType = actionType;
  }

  /**
   *
   * @param {string} chunk
   * @param {string} encoding
   * @param {Function} callback
   */
  _transform(chunk, encoding, callback) {
    try {
      let result;

      switch (this.actionType) {
        case 'encode': result = encrypt(this.shift, chunk.toString()); break;
        case 'decode': result = decrypt(this.shift, chunk.toString()); break;
        default: throw new Error('Please use only decode/encode action type');
      }

      callback(null, result);
    } catch (error) {
      callback(error);
    }
  }
}

const createCipherTransform = (shift, action) => {
  return new CipherTransform({ encoding: 'utf-8' }, shift, action);
}

module.exports = createCipherTransform;
