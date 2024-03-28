/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < firstList.length && j < secondList.length) {
    let [start1, end1] = firstList[i];
    let [start2, end2] = secondList[j];
    if (start2 <= end1) {
      if (end1 >= start2) {
        res.push([start2, end1]);
      } else {
        res.push([start2, start2]);
      }
      res.push([Math.max(start1, start2), Math.min(end1, end2)]);
      if (firstList[i + 1] && end2 == firstList[i + 1][0]) {
        res.push([end2, end2]);
      }
      i++;
      j++;
    } else {
      j++;
    }
  }
  return res;
};

export default intervalIntersection;
