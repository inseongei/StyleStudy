/* 00:42 / 10:00 */
function solution(my_string, n) {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    result += my_string[i].repeat(n);
  }
  return result;
}

// 1. result 문자열 변수를 만든 뒤 n만큼 my_string[i]번째를 repeat
