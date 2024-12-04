/* 01:22 / 10:00 */
function solution(numbers, n) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
    if (result > n) return result;
  }
}

// 정수 배열 numbers , 정수 n
// numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 리턴
