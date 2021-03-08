const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    function sepStr({addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
        let ret = [];
        while (additionRepeatTimes-- > 0)
        {
            if (typeof addition === 'boolean')
                addition = addition.toString();
            if (addition === null)
                addition = 'null';
            ret.push(addition);
        }
        return ret.join(additionSeparator || '');
    }
    let ret = [];
    let addStr = sepStr(options);
    if (options.repeatTimes === undefined)
        options.repeatTimes = 1;
    while(options.repeatTimes-- > 0)
    {
        if (typeof str === 'boolean')
            str = str.toString();
        if (str === null)
            str = 'null';
        ret.push(str);
    }
    return ret.join(`${addStr}${options.separator || '+'}`) + addStr;
};
