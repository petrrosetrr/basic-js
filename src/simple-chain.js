const CustomError = require("../extensions/custom-error");

const chainMaker = {
    _str: [],
    getLength() {
        return this._str.length;
    },
    addLink(value = ' ') {
        if (value !== null)
            this._str.push(value.toString());
        else
            this._str.push('null');
        return this;
    },
    removeLink(position) {
        if (position < 1 || position >= this._str.length) {
            this._str = [];
            throw new Error();
        }
        this._str.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this._str.reverse();
        return this;
    },
    finishChain() {
        let ret = '( ' + this._str.join(' )~~( ') + ' )';
        this._str = [];
        return  ret;
    }
};
module.exports = chainMaker;
