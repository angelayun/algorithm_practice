/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(")");
    else if (s[i] == ")" && stack[stack.length - 1] == s[i]) stack.pop();
    if (s[i] == "{") stack.push("}");
    else if (s[i] == "}" && stack[stack.length - 1] == s[i]) stack.pop();
    if (s[i] == "[") stack.push("]");
    else if (s[i] == "]" && stack[stack.length - 1] == s[i]) stack.pop();
  }
  debugger;
  return stack.length == 0;
};
export default isValid;
