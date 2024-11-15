/* 06:31 / 10:00 */
function solution(my_string, indices) {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) result += my_string[i];
  }
  return result;
}

// 문자열 my_string과 정수 배열 indices

// 1. 문자열에서 indices의 요소가 아닌 것들만 뽑아서 result 문자열에 더해준다.
