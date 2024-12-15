/* 07:57 / 10:00 */
function solution(arr, k) {
  let SetArray = [...new Set(arr)];
  let result = [];

  for (let i = 0; i < k; i++) {
    SetArray[i] === undefined ? result.push(-1) : result.push(SetArray[i]);
  }

  return result;
}

// 랜덤으로 서로 다른 k개의 수를 저장한 배열을 만든다.

// 1. 주어지는 arr를 중복이 없이 만들어야 한다.
// 2. k만큼 1번에서 만든 배열을 빼온다.
// 3. 더이상 없다면 -1을 넣어준다.
