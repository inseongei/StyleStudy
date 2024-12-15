/* 03:23 / 10:00 */
function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop();
      } else {
        stk.push(arr[i]);
      }
    }
  }
  return stk.length === 0 ? [-1] : stk;
}

// 0 과 1로만 이루어진 정수 배열 arr

// 1. i의 초기값을 0으로 설정하고 i가 arr의 길이랑 비교
// 2. stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더한다.
// 3. stk가 원소가 있고 stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더한다.
