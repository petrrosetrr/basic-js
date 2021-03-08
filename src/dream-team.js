const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array) || members.length <= 0)
    return false;
  return members.reduce((acc, value) =>{
    if (typeof value !== "string")
      return acc;
    if (acc === undefined)
      return acc = value.trim()[0].toUpperCase();
    else
      return acc += value.trim()[0].toUpperCase();
  }, undefined).split('').sort().join('');
};
