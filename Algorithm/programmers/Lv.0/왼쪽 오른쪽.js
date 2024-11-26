/* 02:28 / 15:00 */
function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "r") {
      return str_list.slice(i + 1, str_list.length);
    } else if (str_list[i] === "l") {
      return str_list.slice(0, i);
    }
  }
  return [];
}

// 먼저 나오는 문자열이 r : 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담는다.
// 먼저 나오는 문자열이 l : 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담는다.
