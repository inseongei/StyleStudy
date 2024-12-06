/* 01:40 / 10:00 */
function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      strArr[i] = strArr[i].toLowerCase();
    } else {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr;
}

// 홀수 번째 인덱스의 문자열은 대문자
// 짝수 번째 인덱스의 문자열은 소문자
