/* 01:03 / 10:00 */
function solution(my_string) {
  let arr = my_string.split(" ");
  return arr.filter((item) => item !== "");
}
