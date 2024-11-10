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

/* 09:26 / 15:00 */
function solution(arr, queries) {
  let result = [];
  let answers = [];

  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (arr[j] > queries[i][2]) result.push(arr[j]);
    }
    result.length === 0 ? answers.push(-1) : answers.push(Math.min(...result));
    result = [];
  }
  return answers;
}

// 정수 배열 arr
// 정수 배열 queries → query [s,e,k]
// 각 query 마다 순서대로 s ~ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾는다

// 1. queries를 반복문으로 돌리면서 각각의 query에 대해 s부터 e까지 반복을 한다. ( 이중 반복문 )
// 2. s ~ e까지 반복을 하면서 k보다 큰 수를 result 배열에 넣는다.
// 3. result 배열에서 Math.min을 사용하여 가장 작은 수를 answer 배열에 넣는다.
