const crypto = require("crypto")
const aesjs = require("aes-js")

// MID demoOMED
// ESHOPID 11111111
// KEY 1234567812345678123456781234567812345678123456781234567812345678

// demoOMED0.50EUR529488TestovaciaPlatba2018-01-02 15:54:16
// 718A3D1C6C88F89E753B2D600E0B55D4

const key = "1234567812345678123456781234567812345678123456781234567812345678"
const keyBytes = aesjs.utils.hex.toBytes(key)
console.info("keyBytes", keyBytes + "") // 18,52,86,120,18,52,86,120,18,52,...

const iv = "DemoOMEDDEMOomeD"
const ivBytes = aesjs.utils.utf8.toBytes(iv)
console.info("ivBytes", ivBytes + "") // 100,101,109,111,79,77,69,68,68,69,...

const text = "DemoOMED1.00EUR1234567890JožkoMrkvička2014-12-01 13:00:00"
const textHashHex = crypto.createHash("sha1").update(text).digest("hex").substr(0, 32)
const textHashBytes = aesjs.utils.hex.toBytes(textHashHex)
console.info("textHashBytes", textHashBytes + "") // 157,175,48,14,65,143,147,64,243,..

const aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes, 16)
const encryptedBytes = aesCbc.encrypt(textHashBytes)
const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes)

console.info("encryptedHex", encryptedHex.toUpperCase()) // 718A3D1C6C88F89E753B2D600E0B55D4

module.exports = function(options) {

    return new BeBusy(options);

};
