const fs = require('fs');
const path = require('path');

/**
 * Creates readable stream from file. If file is not provided it uses `process.stdin`
 * @param {string} fileName
 * @returns {NodeJS.WriteStream}
 */
const createWriteStream = fileName => {
  if (!fileName) {
    return process.stdout;
  }

  return fs.createWriteStream(path.resolve(fileName));
};

module.exports = createWriteStream;
