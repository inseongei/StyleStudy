/* 03:58 / 10:00 */
function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] * numbers[j]);
    }
  }

  return Math.max(...result);
}

// 정수 배열 numbers 매개변수
