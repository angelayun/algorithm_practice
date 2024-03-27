/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  let arr = new Array(10).fill(0);
  let res = 0;
  function dfs(root, arr) {
    if (!root) return;
    arr[root.val] ^= 1;
    if (!root.left && !root.right) {
      if (arr.reduce((a, b) => a + b, 0) <= 1) {
        res++;
      }
    }
    dfs(root.left, arr);
    dfs(root.right, arr);
    arr[root.val] ^= 1;
  }
  dfs(root, arr);
  return res;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  let mask = 0;
  let res = 0;
  function dfs(root) {
    if (!root) return;
    mask |= 1 << root.val;
    if (!root.left && !root.right) {
      if ((mask & (mask - 1)) == 0) {
        res++;
      }
    }
    dfs(root.left);
    dfs(root.right);
    mask ^= 1 << root.val;
  }
  dfs(root);
  return res;
};

let myname = "极客时间";
{
  console.log(myname);
  let myname = "极客邦";
}
