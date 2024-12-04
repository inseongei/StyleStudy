/* 04:03 / 10:00 */
function solution(array, n) {
  let result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    result.push(Math.abs(n - array[i]));
  }
  return array[result.indexOf(Math.min(...result))];
}

// 정수 배열 array와 정수 n이 매개변수로 주어질 때 array에 들어있는 정수 중 n 가 가장 가까운 수
