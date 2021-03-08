const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr))
        throw new Error();
    let ret = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === '--discard-next')
        {
            if (i + 1 < arr.length)
            {
                if (i + 2 < arr.length && (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev'))
                    i += 2;
                else
                    i++;
            }
        }
        else if (arr[i] === '--discard-prev')
        {
            ret.pop();
        }
        else if (arr[i] === '--double-next')
        {
            if (i + 1 < arr.length)
                ret.push(arr[i + 1])
        }
        else if (arr[i] === '--double-prev')
        {
            if (i - 1 > 0)
                ret.push(arr[i - 1]);
        }
        else
            ret.push(arr[i]);
    }
    return ret;
};
