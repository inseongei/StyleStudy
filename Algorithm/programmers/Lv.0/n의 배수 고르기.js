/* 01:27 / 10:00 */
function solution(n, numlist) {
  let result = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) result.push(numlist[i]);
  }
  return result;
}

// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때
