var letterCombinations = function (digits) {
  let strs = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
    len = digits.length,
    i = 0,
    result = [];
  while (i <= len) {
    let j = 0,
      temps = strs[digits[i] - 2],
      temps_len = temps.length;
    while (j < temps_len) {
      result.push([])
    }
  }
};
letterCombinations('23');
