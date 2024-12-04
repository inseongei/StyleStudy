/* 01:20 / 10:00 */
function solution(my_string) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      result += my_string[i].toLowerCase();
    } else {
      result += my_string[i].toUpperCase();
    }
  }
  return result;
}

// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열
