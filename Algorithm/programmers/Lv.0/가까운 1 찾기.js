/* 05:07 / 10:00 */
function solution(arr, idx) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && i >= idx) return i;
  }

  return -1;
}

// 정수 배열 arr (1 or 0)
// 정수 idx
// idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환

// 1. arr의 길이만큼 반복을 하면서 배열의 값이 1이고 && idx 보다 arr[i]가 큰지를 확인
