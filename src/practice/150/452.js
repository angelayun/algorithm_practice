/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let ans = 1;
  let pos = points[0][1];
  for (let i = 1; i < points.length; ++i) {
    if (points[i][0] > pos) {
      ans++;
      pos = points[i][1];
    }
  }
  return ans;
};
