/**
 * @param {number[]} nextVisit
 * @return {number}
 */
var firstDayBeenInAllRooms = function (nextVisit) {
  let visitCount = 1;
  let day = 0;
  let res = 0;
  while (day < nextVisit.length) {
    if (visitCount & 1) {
      day += nextVisit[day];
    }
    res++;
  }
  return res;
};
