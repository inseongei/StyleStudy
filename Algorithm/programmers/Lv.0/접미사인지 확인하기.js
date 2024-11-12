/* 03:02 / 10:00 */
function solution(my_string, is_suffix) {
  for (let i = 0; i < my_string.length; i++) {
    let str = my_string.substring(i, my_string.length + 1);
    if (str === is_suffix) return 1;
  }

  return 0;
}

// is_suffix : 접미사
// my_string : 문자열
// 문자열에 해당 접미사가 맞는지를 확인하면 된다.

// 1. 반복문을 통해 is_suffix가 my_string의 접미사인지 확인한다.
// 2. my_string을 i부터 문자열의 끝까지 돌면서 is_suffix가 맞는지 확인한다. ( 맞으면 반복문에서 1로 리턴 )
