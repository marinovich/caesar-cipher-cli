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

    this._shift = shift;
    this._actionType = actionType;
  }

  _transform(chunk, encoding, callback) {
    try {
      const resultString = encrypt(this._shift, chunk.toString('utf-8'));

      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

const createCipherTransform = (shift, action) => {
  return new CipherTransform({ encoding: 'utf-8' }, shift, action);
}

module.exports = createCipherTransform;
