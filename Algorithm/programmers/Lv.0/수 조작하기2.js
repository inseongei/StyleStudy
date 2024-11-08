/* 시간초과💢 */
function solution(numLog) {
  let result = [];
  let array = [1, -1, 10, -10];
  let strArr = ["w", "s", "d", "a"];
  for (let i = 0; i < numLog.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (numLog[i] + array[j] === numLog[i + 1]) result.push(strArr[j]);
    }
  }
  return result.join("");
}

// 정수 배열 numLog

// 1. array 배열과 strArr 배열을 동일하게 만들어준다.
// 2. 중첩 반복문을 사용하여 numLog i번째를 기준으로 array[j] 확인하면서 numLog[i+1]인지 확인한다.
// 3. 맞을 경우 result에 동일한 strArr의 j번쨰를 넣어준다.
