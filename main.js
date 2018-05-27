const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = previousHash.toString();
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash.toString();
  }
}
var calculateHash = (index, previousHash, timestamp, data) => {
  return SHA256(index + previousHash + timestamp + data).toString();
};
