/* 01:29 / 10:00 */
function solution(str_list, ex) {
  return str_list.filter((item) => !item.includes(ex)).join("");
}

// 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열
