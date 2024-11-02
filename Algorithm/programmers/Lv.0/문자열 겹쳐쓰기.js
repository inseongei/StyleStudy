/* 06:32 / 10:00 */
function solution(my_string, overwrite_string, s) {
  let result = (my_string + "").split("");
  result.splice(s, overwrite_string.length, overwrite_string);
  return result.join("");
}

// 1. splice를 사용하기 위해 배열로 변경하고 splice를 이용해 s부터 overwrite_string의 길이만큼 제거 해준 뒤 overwrite_string을 넣어준다.
// 2. join("") 메소드를 사용해 배열형태를 문자열로 만들어주면 문제에서 원하는 해답을 찾을 수 있다.

/* 문자열 메소드를 사용한 해답 */
function solution(my_string, overwrite_string, s) {
  let length = my_string.substring(0, s).length + overwrite_string.length;
  return (
    my_string.substring(0, s) +
    overwrite_string +
    my_string.substring(length, my_string.length)
  );
}
