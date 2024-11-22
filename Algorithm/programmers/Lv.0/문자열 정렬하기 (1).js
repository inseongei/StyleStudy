/* 02:33 / 10:00 */
function solution(my_string) {
  let result = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) result.push(+my_string[i]);
  }
  return result.sort();
}

// 문자열 my_string
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트 리턴

// 1. my_string을 반복하면서 isNaN 메소드를 사용해 숫자만 골라준다.
// 2. 리턴할때 sort를 사용해서 답 찾기
