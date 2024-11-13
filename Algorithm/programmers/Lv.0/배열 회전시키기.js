/* 시간초과💢 */
function solution(numbers, direction) {
  let result = [];

  if (direction === "left") {
    for (let i = 1; i < numbers.length; i++) {
      result.push(numbers[i]);
      if (i === numbers.length - 1) result.push(numbers[0]);
    }
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      result.push(numbers[i]);
      if (i === numbers.length - 2) result.unshift(numbers[numbers.length - 1]);
    }
  }

  return result;
}

// 정수가 담긴 배열 numbers
// 문자열 direction
// 배열 numbers의 원소를 direction 방향으로 한 칸씩 회전
