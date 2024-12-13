/* 01:54 / 10:00 */
function solution(num, k) {
  let array = Array.from(num + "");
  let index = array.indexOf(k + "");
  return index === -1 ? -1 : index + 1;
}

// 정수 num과 k가 매개변수
// num을 이루는 숫자에서 k가 있으면 num의 그 숫자가 있는 자리 수를 return
// 1. num을 배열로 바꾸고 k의 indexOf를 찾으면 돼
