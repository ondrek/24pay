# 24Pay (.js)

<br/>

https://www.npmjs.com/package/24pay

## Usage

```
const p24 = require("24pay")

const key = "1234567812345678123456781234567812345678123456781234567812345678"
const iv = "demoOMEDDEMOomed"
const text = "demoOMED10.50EUR10000TestPayment2014-05-05 14:57:13"

const signed = p24(key, iv, text)
console.info(signed) // 51762BFDA1DEBF57B8F655FC113F6062
```

## Notes:

### MID
Do IV the from your "Mid" combined with reversed form of "Mid" 
Eg. If Mid is "abc123", IV param should be "abc123321cba"

### Licence
Use as far as you want. If you are a good person, buy me a beer.

<br/>

Author Samuel Ondrek
