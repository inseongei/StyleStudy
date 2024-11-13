/* 02:04 / 10:00 */
function solution(q, r, code) {
  let result = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) result += code[i];
  }
  return result;
}

// 두 정수 q,r
// 문자열 code
// code의 각 인덱스를 q로 나눴을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열
