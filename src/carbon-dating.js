const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity) {

  if (typeof (sampleActivity) !== "string" || Number.isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY)
  {
    return false;
  }
  else
  {
    return (Math.ceil((Math.log(parseFloat(sampleActivity) / MODERN_ACTIVITY) / (-0.693)) * HALF_LIFE_PERIOD));
  }
};