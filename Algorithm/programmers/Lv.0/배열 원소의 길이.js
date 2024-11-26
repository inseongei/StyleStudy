/* 01:09 / 10:00 */
function solution(strlist) {
  let result = [];

  for (let i = 0; i < strlist.length; i++) {
    result.push(strlist[i].length);
  }

  return result;
}

// 문자열 배열 strlist
// strlist 각 원소의 길이를 담은 배열을 리턴

// 1. strlist 요소를 반복하면서 각각의 요소의 길이를 result 배열에 넣어주면 된다.
