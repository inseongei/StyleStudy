/* 01:17 / 10:00 */
function solution(my_string, index_list) {
  let result = "";
  for (let i = 0; i < index_list.length; i++) {
    result += my_string[index_list[i]];
  }

  return result;
}

// 문자열 my_string
// 정수 배열 index_list

// 1. index_list를 반복하면서 해당되는 요소의 숫자를 my_string의 인덱스로 가져간다.
