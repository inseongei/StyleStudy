/* 시간초과💢 */
function solution(arr) {
  let stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }

  return stk;
}

// 정수 배열 arr
// 1. 변수 i를 만들고 초기값 0
// 2. stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더한다.
// 3. stk에 원소가 있고 stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk 뒤에 추가 후 i + 1 ( push )
// 4. stk에 원소가 있고 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거 ( pop )
