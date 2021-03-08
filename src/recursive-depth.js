const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr)
    {
        let max = 1;
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                let temp = 1 + this.calculateDepth(element);
                max = (temp > max) ? temp : max;
            }
        });
        return max;
    }
};
