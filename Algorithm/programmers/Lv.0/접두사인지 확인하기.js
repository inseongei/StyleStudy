/* 04:42 / 10:00 */
function solution(my_string, is_prefix) {
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.substring(0, i) === is_prefix) return 1;
  }
  return 0;
}

// my_string 안에 is_prefix가 있는지를 확인하면 된다.
// 반복문을 통해 앞에서부터의 문자가 is_prefix와 동일한지 여부를 확인하면된다.
