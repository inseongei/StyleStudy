/* 시간초과💢 */
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      // 짝수 인덱스: query[i] 인덱스 이후 부분 자르기
      arr = arr.slice(0, query[i] + 1);
    } else {
      // 홀수 인덱스: query[i] 인덱스 이전 부분 자르기
      arr = arr.slice(query[i]);
    }
  }
  return arr;
}
