const logError = (message, exit) => {
  console.error(message)
  exit && process.exit(1)
};

module.exports = logError;
