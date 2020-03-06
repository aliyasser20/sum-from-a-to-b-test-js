
const sum = function(fromN, toN) {
  let result = fromN;

  if (fromN < toN) {
    result += sum(fromN + 1, toN);
  }

  return result;
};

module.exports = sum;

console.log(sum(3, 7));