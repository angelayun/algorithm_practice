/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const b = stack.pop();
      const a = stack.pop();
      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(a - b);
      } else if (token === "*") {
        stack.push(a * b);
      } else if (token === "/") {
        stack.push(parseInt(a / b, 10));
      }
    } else {
      stack.push(parseInt(token, 10));
    }
  }
  return stack[0];
};
export default evalRPN;
