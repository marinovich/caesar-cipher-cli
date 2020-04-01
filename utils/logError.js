/**
 * Logs errors
 * @param {string} message
 * @param {any[]} args
 */
const logError = (message, ...args) => {
  process.stderr.write(message, ...args);
  process.exit(1);
};

module.exports = logError;
