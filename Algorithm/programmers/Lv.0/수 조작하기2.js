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

/* 08:56 / 15:00 */
function solution(numLog) {
  let numList = [1, -1, 10, -10];
  let strList = ["w", "s", "d", "a"];
  let result = "";

  for (let i = 0; i < numLog.length - 1; i++) {
    for (let j = 0; j < numList.length; j++) {
      if (numLog[i + 1] === numLog[i] + numList[j]) {
        result += strList[j];
        break;
      }
    }
  }
  return result;
}

// w : + 1
// s : -1
// d : +10
// a : -10

// 1. [1,-1,10,-10]의 배열을 만들어준다.
// 2. 1번 배열과 순서를 유지하는 [w,s,d,a]를 만들어준다.
// 3.numLog의 요소를 확인하면서 1번 배열을 반복하며 어떤 값이 들어갔는지 확인 ( 이중 반복문 )
// 4. 확인했으면 그 인덱스 요소를 기준으로 2번 배열의 있는 요소를 result 문자열에 더해준다.
