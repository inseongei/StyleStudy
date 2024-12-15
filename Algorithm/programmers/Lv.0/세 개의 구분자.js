/* 시간초과💢 */
function solution(myStr) {
  let array = ["a", "b", "c"];
  let result = [];
  let strarr = Array.from(myStr);
  let str = "";
  for (let i = 0; i < strarr.length; i++) {
    if (!array.includes(strarr[i])) {
      str += strarr[i];
    } else {
      if (str !== "") {
        result.push(str);
        str = "";
      }
    }
  }
  // 마지막 남은 문자열 처리
  if (str !== "") {
    result.push(str);
  }

  return result.length > 0 ? result : ["EMPTY"];
}

// 임의의 문자열 "a","b","c"
