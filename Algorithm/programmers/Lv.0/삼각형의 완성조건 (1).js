/* 03:08 / 10:00 */
function solution(sides) {
  let max = Math.max(...sides);
  let index = sides.indexOf(max);
  let result = 0;
  for (let i = 0; i < sides.length; i++) {
    if (index !== i) {
      result += sides[i];
    }
  }

  return result > max ? 1 : 2;
}

// 선분 세 개로 삼각형을 만들어야 한다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.

// 1. sides 배열에서 Math.max를 이용해서 가장 큰 수를 구해준다.
// 2. 1번에서 찾은 큰수를 제외 한 두 변의 합이 긴변의 합보다 작은지를 확인 후 1 또는 2를 만든다.
