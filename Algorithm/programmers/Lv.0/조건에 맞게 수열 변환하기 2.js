/* 시간초과💢 */
function solution(arr) {
  let prevArr;
  let currentArr = [...arr]; // 입력 배열 복사
  let count = 0; // 작업 반복 횟수

  while (true) {
    // 이전 배열 저장
    prevArr = [...currentArr];

    // 배열 갱신
    currentArr = currentArr.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        return num / 2;
      } else if (num < 50 && num % 2 !== 0) {
        return num * 2 + 1;
      } else {
        return num;
      }
    });

    // 반복 횟수 증가
    count++;

    // 이전 배열과 현재 배열이 같으면 종료
    if (prevArr.every((value, index) => value === currentArr[index])) {
      break;
    }
  }

  return count - 1; // 최종 상태가 동일해질 때까지 반복한 횟수
}
