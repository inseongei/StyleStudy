/* 02:55 / 10:00 */
function solution(my_string) {
  let result = "";
  let moum = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < moum.length; j++) {
      if (!moum.includes(my_string[i])) {
        result += my_string[i];
        break;
      }
    }
  }
  return result;
}

// aeiou의 모음을 제거한 문자열

// 1. 모음 배열을 만들어준다.
// 2. my_string을 반복하면서 모음배열에 includes 되어 있지 않다면 해당 문자열을 result에 포함
