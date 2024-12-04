/* 03:52 / 10:00 */
function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      arr[j] = arr[j] + 1;
    }
  }
  return arr;
}

// 정수 배열 arr와 2차원 정수 배열 queries가 주어진다.
// 각각의 하나의 query는 [s,e]
// s부터 e까지의 i를 1씩 더한다
