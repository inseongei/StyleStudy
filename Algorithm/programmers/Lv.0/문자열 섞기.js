/* 2:39 / 10:00 */
function solution(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }
  return result;
}

// 1. 문자열을 담을 result라는 변수를 만들어 준다.
// 2. 반복문을 이용하여 0부터 str1의 길이만큼 반복을 시키면서 str1과 str2의 문자열을 result에 넣어준다.
// 2-1. str1의 길이만큼 반복문을 돌리는 이유는 str1과 str2의 길이가 같기 때문이다.
