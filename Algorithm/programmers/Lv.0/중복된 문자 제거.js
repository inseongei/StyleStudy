/* 01:34 / 10:00 */
function solution(my_string) {
  let strSet = new Set(my_string);
  let result = "";

  for (let item of strSet) {
    result += item;
  }

  return result;
}

// 문자열 my_string
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 리턴

// 1. my_string을 Set 객체를 이용한다.
// 2. 해당 set 객체를 for of 문을 사용해서 result 문자열에 넣어주면 된다.
