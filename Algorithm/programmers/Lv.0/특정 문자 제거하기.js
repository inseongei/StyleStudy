/* 02:41 / 10:00 */
function solution(my_string, letter) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) result += my_string[i];
  }
  return result;
}

// 문자열 my_string
// 문자 letter

// 1. 빈 문자열 result를 생성한다.
// 2. 반복을 하면서 letter와 맞지 않는 문자열을 result에 더해준다.
