/* 00:59 / 10:00 */
function solution(my_string) {
  my_string = my_string.toLowerCase();

  let array = Array.from(my_string).sort().join("");

  return array;
}

// my_string을 모두 소문자로 바꾸고 알파뱃 순서대로
