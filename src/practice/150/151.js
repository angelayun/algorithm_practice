/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ").filter((item) => item !== "");
  const res = arr.reverse().join(" ");
  return res;
};
