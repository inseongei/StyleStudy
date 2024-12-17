/* 시간초과💢 */
function solution(sides) {
  let max = Math.max(...sides); // 가장 긴 변
  let min = Math.min(...sides); // 가장 짧은 변
  let result = 0;

  // 1. 가장 긴변이 sides에 있는 경우
  for (let i = 0; i <= max; i++) {
    if (max < min + i) result++;
  }

  // 2. 가장 긴 변이 x일 경우
  for (let i = max + 1; i < max + min; i++) {
    result++;
  }

  return result;
}

// 선분 세 개로 삼각형을 만들기 위해선
// 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작아야한다.

// 가장 긴 변인 경우
// 나머지 한변이 가장 길 경우
