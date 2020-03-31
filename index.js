const program = require('commander');
const logError = require('./utils/error');
const { pipeline } = require('stream');
const createReadStream = require('./streams/createReadStream');
const createWriteStream = require('./streams/createWriteStream');
const createCipherTransform = require('./streams/createCipherTransform');

module.exports = () => {
  try {
    const { input, output, action, shift } = program
      .storeOptionsAsProperties(false)
      .requiredOption('-s, --shift <number>', 'a shift')
      .requiredOption('-a, --action <encode|decode>', 'an action')
      .option('-i, --input <file>', 'an input file')
      .option('-o, --output <file>', 'an output file')
      .parse(process.argv)
      .opts();

    const inputReadStream = createReadStream(input);
    const outputWriteStream = createWriteStream(output);
    const cipherTransform = createCipherTransform(shift, action);

    pipeline(
      inputReadStream,
      cipherTransform,
      outputWriteStream,
      (error) => {
        if (error) {
          logError('Pipeline failed.', error.message);
        }
      }
    );
  } catch (error) {
    logError(error.message);
  }
}
