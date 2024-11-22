/* 01:09 / 10:00 */
function solution(my_string) {
  let result = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) result += +my_string[i];
  }

  return result;
}

// 문자열 my_string
// my_string 안의 모든 자연수들의 합을 리턴

// 1. isNaN 메소드를 사용해서 숫자들의 합을 구해준다.
