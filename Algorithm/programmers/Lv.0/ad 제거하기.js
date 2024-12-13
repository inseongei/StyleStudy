/* 00:54 / 10:00 */
function solution(strArr) {
  return strArr.filter((item) => !item.includes("ad"));
}

// 문자열 strArr 배열 중에서 문자열 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거
