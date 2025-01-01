/* 04:36 / 10:00 */
function solution(before, after) {
  let beforeArr = [...before].sort();
  let afterArr = [...after].sort();

  return JSON.stringify(beforeArr) === JSON.stringify(afterArr) ? 1 : 0;
}

// 문자열 before , after
// before의 순서를 바꿔 after를 만들 수 있으면 1 없으면 0
