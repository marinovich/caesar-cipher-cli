const encrypt = (shift, text) => {
  console.log()
  return String.fromCharCode(
    ...text.split('').map(char => ((char.charCodeAt() - 97 + shift) % 26) + 97),
  );
};

const decrypt = (shift, text) => {
  return encrypt(26 - shift, text);
}

module.exports = { decrypt, encrypt };
