/* 시간초과💢 */
function solution(n) {
  let count = 0; // 3x 마을에서의 숫자 개수를 세기 위한 변수
  let index = 1; // 자연수 1부터 시작

  while (count < n) {
    // n번째 숫자를 찾을 때까지 반복
    // 현재 숫자가 3의 배수도 아니고, 숫자에 3이 포함되지 않을 경우
    if (index % 3 !== 0 && !(index + "").includes("3")) {
      count++; // 유효한 숫자면 카운트 증가
    }
    if (count < n) {
      index++; // 다음 숫자로 이동
    }
  }

  return index; // n번째 3x 마을의 숫자를 반환
}
