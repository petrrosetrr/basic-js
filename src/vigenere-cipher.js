const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direction) {
        if (direction)
            this.direction = 'rtl';
        else
            this.direction = 'ltr'
    }
    encrypt(message, key) {
        if (typeof message !== 'string' || typeof key !== 'string')
            throw new Error();
        let ret = [];
        message = message.toUpperCase();

    }

    decrypt(encryptedMessage, key) {
        if (typeof encryptedMessage !== 'string' || typeof key !== 'string')
            throw new Error();
        encryptedMessage = message.toUpperCase();

    }
}

module.exports = VigenereCipheringMachine;
