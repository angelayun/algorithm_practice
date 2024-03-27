/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let s0 = 0,
    s1 = 0;
  for (let s of students) {
    if (s == 0) s0++;
    else s1++;
  }
  for (let s of sandwiches) {
    if (s == 0 && s0 > 0) s0--;
    else if (s == 1 && s1 > 0) s1--;
    else return s0 + s1;
  }
};
export default countStudents;
