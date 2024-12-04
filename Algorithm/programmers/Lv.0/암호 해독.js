/* 01:58 / 10:00 */
function solution(cipher, code) {
  let result = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    result += cipher[i];
  }
  return result;
}

// code의 수만큼 i를 증가 시켜 result 문자열에 해당 요소를 더해준다.
