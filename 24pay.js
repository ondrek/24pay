const crypto = require("crypto")
const aesjs = require("aes-js")

const fn = function (key, iv, text) {
    // http://www.24-pay.sk/wp-content/uploads/24Pay-API-Integration.pdf

    if (!key || !iv || !text) {
        return new Error("24pay: Missing mandatory fields")
    }

    // convert string KEY and IV to array of character bytes
    const keyBytes = aesjs.utils.hex.toBytes(key)
    const ivBytes = aesjs.utils.utf8.toBytes(iv)

    // create a hash (in HEX) with SHA1 and cut if from 40 to 32 characters
    const textHashHex = crypto.createHash("sha1").update(text).digest("hex")

    // cut it to 32 characters to make it possible for CBC and bypass padding
    // afterward convert it to an array of character bytes
    const shortHash = textHashHex.substr(0, 32)
    const textHashBytes = aesjs.utils.hex.toBytes(shortHash)

    // create an instance of AES CBC (cipher-block chaining) and convert it to array of chars
    // https://www.npmjs.com/package/aes-js
    const aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes, 16)
    const encryptedBytes = aesCbc.encrypt(textHashBytes)
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes)

    // requested convention
    return encryptedHex.toUpperCase()
}

module.exports.p24 = fn
