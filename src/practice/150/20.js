/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let top = stack.pop();
      if (top !== map[s[i]]) return false;
    }
  }
  return stack.length === 0;
};
export default isValid;
