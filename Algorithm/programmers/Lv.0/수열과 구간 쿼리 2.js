/* 시간초과💢 */
function solution(arr, queries) {
  let result = []; // 조건에 맞는 요소
  let answers = []; // 숫자 요소
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    result.push(arr.slice(queries[i][0], queries[i][1] + 1));
  }

  for (let i = 0; i < result.length; i++) {
    answers.push(result[i].filter((item) => item > queries[i][2]));
  }

  for (let i = 0; i < answers.length; i++) {
    answers[i].length === 0 ? res.push(-1) : res.push(Math.min(...answers[i]));
  }
  return res;
}

// 정수 배열 arr
// 2차원 정수 배열 queries

// 1. queries[0] ~ queries[1]까지의 arr배열을 잘라낸다
// 2. queries[2]보다 큰 값을 배열안에 넣어준다
// 3. 배열안에서 가장 작은 값을 찾아야 하니 Math.min(arr)
