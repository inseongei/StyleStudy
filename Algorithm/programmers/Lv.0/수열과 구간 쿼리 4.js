/* 시간초과💢 */
function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (j % queries[i][2] === 0) arr[j]++;
    }
  }
  return arr;
}

// 정수 배열 arr
// 2차원 정수 배열 queries [s,e,k] s <= i <= e

// 1. queries[i][2] === k
// 2. queries[i][0] ~ queries[i][1] 돌면서 i가 queries[i][2]의 배수라면 arr[i]에 1을 더한다.
