/* 09:42 / 10:00 */
function solution(n) {
  let result = [];
  // 1. 팩토리얼 함수
  function fact(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // 2. 해당 함수의 반환 값 계산
  for (let i = 1; i <= 10; i++) {
    const factnum = fact(i);
    if (factnum <= n) result.push(i);
    console.log(result);
  }

  // 3. 리턴
  return Math.max(...result);
}

// 1부터 i까지 정수의 곱을 의미
// n이 주어질 때 해당되는 팩토리얼을 구한다.

// 1. 팩토리얼이라는 함수를 만든다.
// 2. 해당 함수의 반환 값이 n보다 작거나 같을 경우에 result 배열에 넣어준다.
// 3. return을 할때 result 배열에서 가장 큰 수를 리턴해준다.
