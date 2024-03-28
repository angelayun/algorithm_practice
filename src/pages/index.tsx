import longestSubarray from "../practice/dp/1493.js";
// import removeDuplicates from "../practice/150_old/80.js";
import canJump from "../practice/150_old/55.js";
import longestCommonPrefix from "../practice/150_old/14.js";
import isValid from "../practice/150_old/20.js";
// import bfs from "../practice/150/bfs.js";
// import help from "../practice/150/ccc.js";
// import numberOfGoodSubarraySplits from "../practice/lyh/2750.js";
import rangeSum from "../practice/lyh/1508.js";
import countStudents from "../practice/lyh/1700.js";
import intervalIntersection from "../practice/150/986.js";
import removeDuplicates from "../practice/150/80.js";
import rotate from "../practice/150/189.js";
export default function HomePage() {
  // console.log(longestSubarray([1, 1, 0, 1]));
  // console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
  // console.log(removeDuplicates([0, 0, 0, 0, 0]));
  // console.log(rotate([1], 1));
  function toggleCase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      // 小写字母转大写字母（a-z: 97-122，A-Z: 65-90）
      if (charCode >= 97 && charCode <= 122) {
        // charCode &= ~32; // 在ASCII码中，小写转大写只需将第5位（32）取反
        charCode ^= 32; // 在ASCII码中，小写转大写只需将第5位（32）取反
      }
      // 大写字母转小写字母
      else if (charCode >= 65 && charCode <= 90) {
        charCode |= 32; // 在ASCII码中，大写转小写只需将第5位（32）设置为1
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }

  // 示例
  var str = "Hello World";
  console.log(toggleCase(str)); // 输出: hELLO wORLD

  // console.log(canJump([0]));
  // console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  // console.log(isValid("]"));
  // console.log(help());
  // console.log(numberOfGoodSubarraySplits([0, 1, 0, 0, 1]));
  // console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
  // console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
  // console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
  /* console.log(
    intervalIntersection(
      [[14, 16]],
      [
        [7, 13],
        [16, 20],
      ]
    )
  ); */
  return <div>这是主页</div>;
}
