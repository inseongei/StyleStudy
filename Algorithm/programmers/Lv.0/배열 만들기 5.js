/* 03:04 : 10:00 */
function solution(intStrs, k, s, l) {
  let result = [];
  for (let i = 0; i < intStrs.length; i++) {
    let num = +intStrs[i].substring(s, s + l);
    num > k && result.push(num);
  }
  return result;
}

// 문자열 배열 intStrs
// 정수 k , s , l이 주어진다.

// 1. intStrs의 요소마다 s번 ~ l번까지의 문자열을 잘라내 정수로 변환
// 2. 1번에서 뽑은 정수가 k랑 비교해봤을 때 크면 result 배열에 넣어준다.
