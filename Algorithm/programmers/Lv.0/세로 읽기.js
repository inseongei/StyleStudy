/* 06:10 / 10:00 */
function solution(my_string, m, c) {
  let array = [];
  let result = "";

  for (let i = 0; i < my_string.length; i += m) {
    let str = my_string.substring(i, m + i);
    array.push(str);
  }

  for (let i = 0; i < array.length; i++) {
    result += array[i][c - 1];
  }

  return result;
}

// 문자열 my_string
// 두 정수 m , c
// my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 리턴

// 1. 반복문을 이용하여 my_string의 m글자씩 추출한다.
// 2. 이중 반복문을 이용하여 1번의 요소들의 c 번째를 result에 더해준다.
