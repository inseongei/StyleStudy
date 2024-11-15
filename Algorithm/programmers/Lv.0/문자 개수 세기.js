/* 시간초과💢 */
function solution(my_string) {
  let result = new Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    let charCode = my_string[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      result[charCode - 65] += 1;
    } else if (charCode >= 97 && charCode <= 122) {
      result[charCode - 97 + 26] += 1;
    }
  }
  return result;
}
