/* 09:18 / 10:00 */
function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let num1 = arr.splice(queries[i][0], 1, queries[i][1]);
    let num2 = arr.splice(queries[i][1], 1, queries[i][0]);

    arr.splice(queries[i][0], 1, ...num2);
    arr.splice(queries[i][1], 1, ...num1);
  }
  return arr;
}

// 정수배열 arr
// 2차원 정수 배열 queries

// 1. queries i번째의 0번의 요소를 잘라낸다.
// 2. queries i번째의 1번의 요소를 잘라낸다.
// 3. arr에 해당되는 요소의 1번의 요소를 넣어준다.
// 4. arr에 해당되는 요소의 2번의 요소를 넣어준다.
