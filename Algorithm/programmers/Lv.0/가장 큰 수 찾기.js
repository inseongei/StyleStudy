/* 00:48 / 10:00 */
function solution(array) {
  let maxNum = Math.max(...array);
  let idx = array.indexOf(maxNum);

  return [maxNum, idx];
}

// 정수 배열 array 에서 가장 큰수와 그 수의 인덱스를 담은 배열
