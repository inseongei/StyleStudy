/* 00:44 / 10:00 */
function solution(rny_string) {
  rny_string = rny_string.replaceAll("m", "rn");

  return rny_string;
}

// m과 rn이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 할려고 한다.
// 모든 m을 rn으로 바꾼 문자열을 리턴
