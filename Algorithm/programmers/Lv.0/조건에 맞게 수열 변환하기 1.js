/* 04:12 / 15:00 */
function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      result.push(arr[i] / 2);
    } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
      result.push(arr[i] * 2);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// 정수 배열 arr
// arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고
// 50보다 작은 홀수라면 2를 곱해라
