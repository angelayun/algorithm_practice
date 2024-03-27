import longestSubarray from "../practice/dp/1493.js";
import removeDuplicates from "../practice/150/80.js";
import canJump from "../practice/150/55.js";
import longestCommonPrefix from "../practice/150/14.js";
import isValid from "../practice/150/20.js";
// import bfs from "../practice/150/bfs.js";
// import help from "../practice/150/ccc.js";
// import numberOfGoodSubarraySplits from "../practice/lyh/2750.js";
import rangeSum from "../practice/lyh/1508.js";
import countStudents from "../practice/lyh/1700.js";

export default function HomePage() {
  // console.log(longestSubarray([1, 1, 0, 1]));
  // console.log(removeDuplicates([1, 1, 2]));
  // console.log(canJump([0]));
  // console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  // console.log(isValid("]"));
  // console.log(help());
  // console.log(numberOfGoodSubarraySplits([0, 1, 0, 0, 1]));
  // console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
  // console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
  console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
  return <div>这是主页</div>;
}
