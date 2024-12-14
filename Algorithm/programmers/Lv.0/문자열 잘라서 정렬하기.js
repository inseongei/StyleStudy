/* 02:41 / 10:00 */
function solution(myString) {
  let result = [];
  let splitArr = myString.split("x");

  splitArr.forEach((item) => {
    if (item !== "") result.push(item);
  });

  return result.sort();
}

// 문자열 myString "x"를 기준으로 해당 문자열을 잘라내 배열을 만든다.
// 사전순으로 정렬
