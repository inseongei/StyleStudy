/* 01:12 / 10:00 */
function solution(myString) {
  let splitArr = myString.split("x");
  return splitArr.map((item) => item.length);
}

// 문자열 myString이 주어진다.
// 문자 x를 기준으로 나눴을 때
