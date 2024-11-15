/* 05:47 / 10:00 */
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] * numbers[numbers.length - 2];
}

// 정수 배열 numbers가 매개변수로 주어진다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

// 1. 큰 정수 두 개를 곱하면 되기 때문에 오름차순 정렬 후 배열의 끝자리와 끝에서 두번째 자리를 곱해준다.
