const fs = require('fs');
const path = require('path');

/**
 * Creates readable stream from file. If file is not provided it uses `process.stdin`
 * @param {string} fileName
 * @returns {NodeJS.ReadStream}
 */
const createReadStream = fileName => {
  if (!fileName) {
    return process.stdin;
  }

  const filePath = path.resolve(fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error('File does not exist');
  }

  return fs.createReadStream(filePath);
};

module.exports = createReadStream;
