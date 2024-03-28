/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const dirs = path.split("/");
  for (const dir of dirs) {
    if (dir === "..") {
      // 两个点表示向上一级  当然需要判断上一级是否存在  js里面不用判断也是ok的不会报错
      // if (stack.length) {
      stack.pop();
      // }
    } else if (dir && dir !== ".") {
      stack.push(dir);
    }
  }
  return "/" + stack.join("/");
};
export default simplifyPath;
