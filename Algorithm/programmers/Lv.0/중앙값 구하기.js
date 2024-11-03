/* 1:52 / 10:00 */
function solution(array) {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length / 2)];
}

// 1. 중앙값을 구하기 위해서는 주어지는 array를 정렬한다.
// 2. array의 길이에서 2를 나눈 값을 뽑아주면 되지만 길이가 홀수 일 경우가 있으니 Math.floor로 소수점은 제거
