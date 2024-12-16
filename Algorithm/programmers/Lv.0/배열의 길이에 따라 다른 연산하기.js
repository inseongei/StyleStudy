/* 03:22 / 10:00 */
function solution(arr, n) {
  let result = [];
  if (arr.length % 2 === 0) {
    // 짝수라면
    for (let i = 0; i < arr.length; i++) {
      i % 2 !== 0 ? result.push(arr[i] + n) : result.push(arr[i]);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      i % 2 === 0 ? result.push(arr[i] + n) : result.push(arr[i]);
    }
  }
  return result;
}

// 정수 배열 arr , 정수 n

// 1. arr의 길이가 홀수인지 짝수인지를 판별
// 짝수일 경우 짝수인덱스에 n을
// 홀수일 경우 홀수인덱스에 n을
